import { useReducer } from "react";
import { add1, rem1 } from "../../Actions/count";
import { add2, rem2 } from "../../Actions/count";
import { add5, rem5 } from "../../Actions/count";
import { randCol } from "../../Actions/count";
import { randSize } from "../../Actions/count";
import { border } from "../../Actions/count";
import { addSq, remSq } from "../../Actions/count";
import count from "../../Reducers/count";
import sq from "../../Reducers/sq";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {number: 0, color: '#54aaaa', fs: "10px", border: false});  //dispach paima action objekta, kuri nunesa i reducer, count yra funkcija is reducer
                                                                        //defaultinis state situo atveju yra objektas, kurio pradine reiksme yra nulis.

    const [squares, dispachSquares] = useReducer(sq, [])                                                                   
    return (
        <>
        <h2 style = {{color: counter.color, fontSize: counter.fs, border: counter.border ? '1px solid crimson' : null}}>{counter.number}</h2>   
        <div className="container">
            <button onClick={() => dispachCounter(add1())}>+1</button>
            <button onClick={() => dispachCounter(rem1())}>-1</button>
            <button onClick={() => dispachCounter(add2())}>+2</button>
            <button onClick={() => dispachCounter(rem2())}>-2</button>
            <button onClick={() => dispachCounter(add5())}>+5</button>
            <button onClick={() => dispachCounter(rem5())}>-5</button>
            <button onClick={() => dispachCounter(randCol())}>Random Color</button>
            <button onClick={() => dispachCounter(randSize())}>Random Font Size</button>
            <button onClick={() => dispachCounter(border())}>Border</button>

            <button onClick={() => dispachSquares(addSq())}>Add Kv</button>
            <button onClick={() => dispachSquares(remSq())}>Rem Kv</button>
            
            <div className="container">
                {
                    squares.map((_, i) => <div className="kv" key = {i}></div>)
                }
               
            </div>

            
        </div>
        </>
    )
}

export default Count;