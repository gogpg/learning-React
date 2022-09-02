
import { useState } from "react";

function Sq() {

    const [cb0, setCb0] = useState(false);

    const [paint, setPaint] = useState(false);

    const [cb1, setCb1] = useState(false);
    const [cb2, setCb2] = useState(false);

    return (
        <>

            <div className="form-container">
                <div className="kv" style={{backgroundColor: paint ? 'black' : 'crimson'}}></div>
                <div>
                    <input type="checkbox" id="_14" onChange={() => setCb0(c => !c)} checked={cb0}></input>
                    <label htmlFor="_14" style={{ color: cb0 ? 'crimson' : null }}>Checked</label>
                </div>
                <button onClick={() => setPaint(cb0)}>Paint</button>
            </div>



            <div className="form-container">
                <div className="kv" style={{backgroundColor: cb1 && cb2 ? 'crimson' : 'black'}}></div>
                <div>
                    <input type="checkbox" id="_15" onChange={() => setCb1(c => !c)} checked={cb1}></input>
                    <label htmlFor="_15" style={{ color: cb1 ? 'crimson' : null }}>ONE</label>
                </div>
                <div>
                    <input type="checkbox" id="_16" onChange={() => setCb2(c => !c)} checked={cb2}></input>
                    <label htmlFor="_16" style={{ color: cb2 ? 'crimson' : null }}>TWO</label>
                </div>
            </div>
            
        </>
    )

}

export default Sq;