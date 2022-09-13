function Create() {

    return (


        <>
            <div className="card">
                <div className="top">
                    Add New Animal
                </div>
                <div className="body">
                    <div className="form">
                        <label>Animal</label>
                        <select >
                            <option selected>Select an animal...</option>
                            <option value="1">Antelope</option>
                            <option value="2">Duck</option>
                            <option value="3">Sheep</option>
                        </select>

                        
                            <label>Weight</label>
                            <input type="number"></input>

                            <button>Add</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;