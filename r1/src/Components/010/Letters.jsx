//import { useState } from 'react';

function Letters({setLetters, letters}) {

    //const [letters, setLetters] = useState('');
   
    
    const controlLetters = e => {
        setLetters(e.target.value);
    }

    return ( 
        <>
            <div className="form-container">
                
                <input type="text" onChange={controlLetters} value={letters}></input>
            </div>
        </>
    )
}

export default Letters;