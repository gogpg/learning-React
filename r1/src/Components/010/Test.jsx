import { useState } from 'react';


function Test() {

   
 
   const [kv, setKv] = useState(false)
    const [ap, setAp] = useState(false)

    const [kv1, setKv1] = useState(false)  //figuros pradine stadija false, ju nesimato.
    const [ap1, setAp1] = useState(false)

  
    return ( 
        <>
            <div className="form-container">

                {kv1 ? <div className='kv'></div> : null}

                <div> 
                   <input type="checkbox" id="_22" onChange={() => setKv(c => !c)} checked={kv}></input>
                    <label htmlFor="_22" style={{color: kv ? "red" : null}} >ONE</label>
                </div>

                <button onClick={() => setKv1(kv)}>show/hide</button> 

            </div>

            <div className="form-container">

                {ap1 ? <div className='ap'></div> : null}

                <div>
                    <input type="checkbox" id="_33" onChange={() => setAp(c => !c)} checked={ap}></input>
                    <label htmlFor="_33">TWO</label>
                </div>

                <button onClick={() => setAp1(ap)}>show/hide</button>
            </div>
           

        </>
    )
}

export default Test;