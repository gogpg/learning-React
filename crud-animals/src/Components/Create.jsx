import { useState } from "react";

function Create() {

    const [animal, setAnimal] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <>
            <div className="card">
                <div className="top">
                    Add New Animal
                </div>
                <div className="body">
                    <div className="form">
                        <label>Animal</label>
                        <select className = "form-control" value={animal} onChange={e => setAnimal(e.target.value)} >
                            <option selected>Select an animal...</option>

                            <option value="1">Antelope</option>
                            <option value="2">Duck</option>
                            <option value="3">Sheep</option>
                        </select>
                    </div>
                    <div className="form">
                        <label>Weight</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
                    </div>
                    <div className="form">
                        <button>Add</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Create;