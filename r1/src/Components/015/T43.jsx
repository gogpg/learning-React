
function T43({ setAp1, setAddFig}) {

    return (
        <>
        <button onClick={() => setAp1(f => [...f, ''])}>Add ap</button>

        <button onClick={() => setAddFig(f => [...f, 'ap'])}>Add ap</button>
        </>
    )

}

export default T43;