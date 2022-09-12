//import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import T11 from './Components/015/T11';
import T12 from './Components/015/T12';
import T21 from './Components/015/T21';
import T22 from './Components/015/T22';
import T31 from './Components/015/T31';
import T32 from './Components/015/T32';
import T41 from './Components/015/T41';
import T42 from './Components/015/T42.jsx';
import T43 from './Components/015/T43.jsx';



function App() {
    const [number, setNumber] = useState(0)
    const [kv, setKv] = useState(false)
    const [ap, setAp] = useState(true)
    const [kv1, setKv1] = useState([])
    const [ap1, setAp1] = useState([])
    const [addFig, setAddFig] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
         
          <h1>Total Recall 2</h1>
          <T11 setNumber = {setNumber}/>
          <T12 number= {number}/>
          
          <T22 kv = {kv}/>
          <T21 kv = {kv} setKv = {setKv}/>

            <div className='container31'>
                <T31 ap = {ap} setAp = {setAp}/>
         
            </div>
            <div className='container31'>
                <T32 ap = {ap} setAp = {setAp}/>
         
            </div>

            
            <T42 kv1 = {kv1} ap1 = {ap1} addFig = {addFig} />
            <T43 setAp1 = {setAp1} setAddFig = {setAddFig}/>
            <T41  setKv1 =  {setKv1} setAddFig = {setAddFig}/>
      </header>
    </div>
  );
}

export default App;