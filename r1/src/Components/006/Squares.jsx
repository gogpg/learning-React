import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';

function Squares() {

    const [sq, setSq] = useState([]);
    const [selected, setSelected] = useState(null)
    const [color, setColor] = useState(randColor())
    const [sort, setSort] = useState(1)

    //  useEffect(() => {
    //      setColor(randColor())
    // }, [sq]);

    const add = () => {
        setSq(s => [...s, { 
            number: rand(100, 999), 
            color: randColor(),
            row: s.length,
            show: true
            
        }]);
    }

    const sortt = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }

    const sort1 = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number));
    }

    const sortDefault = () => {
        setSq(s => s.map(square => ({...square, show: true})).sort((a, b) => a.row - b.row));
    }

    const showBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? {...square, show: true} : {...square, show: false}));
    }

    const showNonBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? {...square, show: false} : {...square, show: true}));
    }

    const doClick = num => {
        setSelected(num);
        setSq(s => s.map(square => square.number === num ? {...square, show: false} : {...square}));
    }

    const resurect = () => {
        setSq(s => s.map(square => square.number === selected ? {...square, show: true} : {...square}));
    }

        const first5 = () => {
        setSq(s => s.map((square, i) => i < 5 ? {...square, show: true} : {...square, show: false}));
    }

    const sort2 = () => {
        setSq(s => [...s].sort((a, b) => sort * (a.number - b.number)));
        setSort(s => s * -1);
    }
    

    return (
        <>
            <h2>{selected}</h2>

            <h1 style = {{color: setColor}}>STATE {sq.filter(s => s.number < 300).length}</h1>

            <div className="container">
                {
                    sq.map((n, i) => n.show ? <div style={
                        { 
                           borderRadius: n.number % 2 ? null : '50%',
                           backgroundColor: n.number < 300 ? 'black' : n.color
                        }
                    } key={i} onClick={() => doClick(n.number)}>{n.number}</div> : null)
                }
            </div>

            <div className="button-container">
                <button onClick={add}>add []</button>
                <button onClick= {sortt}>sort(9-0)</button>
                <button onClick= {sort1}>sort(0-9)</button>
                <button onClick= {sortDefault}>Default</button>
                <button onClick= {showBlack}>Black</button>
                <button onClick= {showNonBlack}>Without black</button>
                <button onClick= {resurect}>Resurect</button>
                <button onClick={first5}>five elements</button>
                <button onClick={sort2}>sort both sides</button>
            </div>
        </>
    )

}

export default Squares;