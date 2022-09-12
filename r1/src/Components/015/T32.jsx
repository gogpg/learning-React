
function T32({ap, setAp}) {
    
    return (
        <>
            {ap ? <div className='ap' onClick={() => setAp(c => !c)}></div> : null}
        </>
    )
}

export default T32;