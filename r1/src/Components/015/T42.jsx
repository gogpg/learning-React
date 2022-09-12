
function T42({kv1, ap1, addFig}) {

    return(
        <>
        
        <div className="container">
            {
                kv1.map((_, i) => <div className="kv" key={i}></div>)  
            }

            {
                ap1.map((_, i) => <div className="ap" key={i}></div>)  
            }

        { 
        addFig.map((c, i) => <div className={c} key={i}></div>) 
        }
      
        </div>
           
        </>
    )
}

export default T42;