
import { useState } from 'react';

function T4() {

    const [pav, setPav] = useState(false)
    
    return(
        <>
        <div>
            {pav ? <img src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/> : null}
        </div>
            <button onClick={() => setPav(!pav)}>show/hide</button> 
        </>
    )

}

export default T4;