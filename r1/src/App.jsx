import { useState } from 'react';
import './App.scss';


function App() {

    const [color, setColor] = useState('crimson');
    const [fontSize, setFontSize] = useState('30px');
    const [number, setNumber] = useState(0);
    const [spacing, setSpacing] = useState('5px')

    // ('crimson') pradine state reiksme

    // funkcija grazina dvi atskiras nepriklausomas konstantas.
    // const color;   state (props), 
    // const setColor; funkcija state keitimui

    /// sitie du kintamieji yra musu sugalvoti. Vadiname state kaip norime, po to pridedame antroje reiksmeje set, (number, setNumber) ir tt...

    const numberCount = () => {
        // setNumber(number + 1)  //veikia, bet nera teisingas variantas
        setNumber(n => n + 1)     // n sugalvotas kintamasis
        setNumber(n => n + 1)   ///dideja kas du numerius, jei antra karta parasau ta pati, pliusuojasi skaiciai.
    }

    const clicked = () => {
        setColor(c => c === 'crimson' ? 'skyblue' : 'crimson')
        setFontSize(c => c === '30px' ? '50px' : '30px')
    }




    return (
        <div className="App">

            <header className="App-header">

                <h1 style={{ color: color, fontSize: fontSize }}>STATE</h1>
                <button onClick={clicked}>CLICK!</button>

                <button onClick={numberCount}>{number}</button>

                <h1 style={{ letterSpacing: spacing }}>Font</h1>

                <button onClick={() => setSpacing('5px')}>5 px</button>
                <button onClick={() => setSpacing('10px')}>10 px</button>



            </header>

        </div>
    );
}

export default App;