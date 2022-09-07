import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Kvad from './Components/012/Kvadrat';
import Plus from './Components/012/Plus';
import RandKv from './Components/012/RandKv';

const defaultCount = {one: 0, two: 0};

function App() {

    const [counts, setCounts] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('counts_key');
        if (null === data) {
            setCounts(defaultCount);
        } else {
            setCounts(JSON.parse(data));
        } 
    }, []);

    useEffect(() => {
        if (null === counts) {
            return;
        }
        localStorage.setItem('counts_key', JSON.stringify(counts));
    }, [counts]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Local Store</h1>
                <h2>ONE: {counts?.one}</h2>
                <h2>TWO: {counts?.two}</h2>
                <button onClick={() => setCounts(c => ({...c, one: c.one + 1}))}>One +</button>
                <button onClick={() => setCounts(c => ({...c, two: c.two + 1}))}>Two +</button>
                <button onClick={() => setCounts(c => ({...c, one: c.one - 1}))}>One -</button>
                <button onClick={() => setCounts(c => ({...c, two: c.two - 1}))}>Two -</button>
                <button onClick={() => setCounts(defaultCount)}>Reset</button>
                <Kvad />
                <Plus />
                <RandKv />
            </header>
        </div>
    );
}

export default App;