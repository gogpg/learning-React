import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext.jsx';
import Edit from './Components/Edit';
import List from './Components/List';
import Msg from './Components/Msg';
import { create, read, destroy, update } from './Functions/localStorage';
import rand from './Functions/rand';

const key = 'things_shelf';    //sukuriame key pavadinima

function App() {


  const [things, setThings] = useState(null);  //listo, kuris rasosi desineje html usestates
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);   //paspaudus mygtuka i createdata saugosime naujus duomenis. Sukursime useEffect, kuriame suskursime duomenis ir juos irasysime.  
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [msgs, setMsgs] = useState([]);


  //READ
  useEffect(() => {       //skaitome duomenis
    setThings(read(key));
  }, [lastUpdate]);

  //CREATE
  useEffect(() => {           //rasome create metoda su use effectu
    if (null === createData) {  //pradzioj bus lygus nului, nes ieko nera, tai tada taip ir returninma, nieko nedarom.
      return;
    }
    create(key, createData);     //sukuriame key kartu su createdata
    setLastUpdate(Date.now());   //nustatom paskutini atnaujinimo laika laika
    makeMsg('New THING was created!', 'success');
  }, [createData]); //use effectas reaguos i useStato createData pokyti.

  //DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg('The THING was broken!', 'info');
  }, [deleteData]);

    //EDIT
    useEffect(() => {
      if (null === editData) {
        return;
      }
      update(key, editData, editData.id);
      setLastUpdate(Date.now());
    }, [editData]);

    const makeMsg = (text, type) => {
      const id = rand(1000000, 9999999);
      setMsgs(m => [...m, {text, id, type}]);
      setTimeout(() => {
        setMsgs(m => m.filter(ms => ms.id !== id));
      }, 4000);
    }

  return (
    <DataContext.Provider value={{    //apipinu viska contextu, kuri sukuriau komponente, kad galeciau perdavineti duomenis, per provider, kuriam suteikiame reiksmes is kitu komponentu.
      setCreateData,                 //perduodame is seteriu visus set
      things,                        //things perduodami i provideri, kur jis juos pasiims ir nunes i List.jsx
      setDeleteData,
      modalData,
      setModalData,
      setEditData,
      msgs
    }}>
    <div className="container">
      <div className="bin">
        <div className="box-1">
          <Create />
        </div>
        <div className="box-2">
          <List />
        </div>
      </div>
    </div>
    <Edit />
    <Msg />
    </DataContext.Provider>   //kontekstas duomenims perduoti
  );
}

export default App;