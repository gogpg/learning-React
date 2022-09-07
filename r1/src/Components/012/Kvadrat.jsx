//import rand from "../../Functions/rand";
import { useState } from "react";
import {useEffect} from "react";

let defaultKv = null

function Kvad() {

    const [kv, setKv] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('kv_key');
        if (null === data) {
            setKv(defaultKv);
        } else {
            setKv(JSON.parse(data));
        } 
    }, []);

    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv_key', JSON.stringify(kv));
    }, [kv]);

    const add = () => {
       setKv(d => [...d, d.length]);
    }

    return(
        <>
        <div className="container">
            {
                kv.map((n, i) => <div className="kv" key={n} i={n}>{i}</div>)  
            }
           
        </div>
        <button onClick={add}>add kvadrata</button>
        </>
    )
 
}

export default Kvad;