import { useState } from 'react';

function T3() {

    const [kv0, setKv0] = useState(false)
    
    return(
        <>
        <div>
            {kv0 ? <div className='kv' onClick={() => setKv0(false)}></div> : null}
        </div>
            <button onClick={() => setKv0(!kv0)}>show</button> 
        </>
    )

}

export default T3;