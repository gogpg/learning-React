import { useState, useEffect } from 'react';
import randColor from '../../Functions/randColor';

function RandKv() {

    const [kv2, setKv2] = useState(null);

    useEffect(() => {
        const data2 = localStorage.getItem('kv2');
        if (null === data2) {
            setKv2(randColor());
        } else {
            setKv2(JSON.parse(data2));
        } 
    }, []);

    useEffect(() => {
        if (null === kv2) {
            return;
        }
        localStorage.setItem('kv2', JSON.stringify(kv2));
    }, [kv2]);

    return (
        <>
        <div className="container">
            <div style={{background: kv2}}></div>
        </div>
        <button onClick={() => setKv2(randColor())}>color</button>
        </>
    )
}

export default RandKv;