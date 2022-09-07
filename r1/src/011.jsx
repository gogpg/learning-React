import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './App.scss';
import Dog from './Components/011/Dog';
import randColor from './Functions/randColor';
import Nine from './Components/011/Nine';

function App() {

    const [dogs, setDogs] = useState([]);
    const [count, setCount] = useState(1);
    const index = useRef(0);
    const addButton = useRef();
    const [nine, setNine] = useState([]);


    const addNine = () => {
        if (nine.length < 9) {
            setNine(n => [...n, randColor()]);
        }
    }

    useEffect(() => {   
        // const b = document.querySelector('#add-button');
        const b = addButton.current;
        b.focus();
    }, [])

    const add = () => {
       // setDogs(d => [...d, '']);   //imame pries tai buvusius kvadratukus d, pries tai buvusius kvadratukus issprediname ir pridedame viena kvadrateli '' pavidalu. taip paspaudus mygtuka atsiras vis naujas kvadratelis.
       // setDogs(d => [...d, d.lenght])  //kitas variantas.
       setDogs(d => [...d, ++index.current]);
    }

    const plus = () => {
        setCount(c => c + 1);
        console.log('senas:' + count);
    }

    useEffect( () => {       ///sis useeffektas reaguoja i state pokyti
        console.log('Dogs Changed Or Added 1');
        console.log('naujas:' + count);
        // setCount(c => c + 1);
    }, [dogs, count]);    //parodo kada komponentas uzsikrauna ir kada pasikeicia dogs ir count statai.

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect {count}</h1>

                <div className="container">
                    {
                        dogs.map((n, i) => <Dog key={n} i={n}></Dog>)  //mapiname i Dog komponenta, kur yra div elementas. kad zinotume koks tas komponentas yra, tai ir i raide perduodu i komponento vidu.
                    }
                </div>
                <div className="container">   
                    <button onClick={add} id="add-button">Add Dog</button>
                    <button onClick={plus} ref={addButton}>Plus</button>
                </div>

                <Nine nine={nine} setNine={setNine}></Nine>
                <button onClick={addNine}>Add Nine</button>


            </header>
        </div>
    );
}


export default App;