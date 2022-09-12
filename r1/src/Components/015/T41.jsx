

function T41({setKv1, setAddFig}) {

    return (
        <>
        <button onClick={() => setKv1(d => [...d, ''])}>Add kv</button>

        <button onClick={() => setAddFig(f => [...f, 'kv'])}>Add kv</button>
        </>
    )

}

export default T41;