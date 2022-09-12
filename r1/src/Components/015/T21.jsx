function T21({ kv, setKv}) {

    return (
        <>
        <button onClick={() => setKv(kv = !kv)}>show/hide kv</button>
        </>
    )
}

export default T21;