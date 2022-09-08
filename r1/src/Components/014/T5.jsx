// import { useState } from 'react';
// function T5() {
    
//     const [buttonnr, setButtonnr] = useState('')

//         return(
//             <>
//                 <h1>{buttonnr}</h1>

//                 <button onClick={() => setButtonnr('1')}>1</button>
//                 <button onClick={() => setButtonnr('2')}>2</button>
//                 <button onClick={() => setButtonnr('3')}>3</button>
               
               
//             </>
//         )
          
// }

// export default T5;

import { useState } from "react";

function T5() {

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <div className="container">
                {
                    [...Array(10)].map((_, i) => <button onClick={() => setNumber(i + 1)} key={i}>{i + 1}</button>)
                }
            </div>
        </>
    )
}

export default T5;