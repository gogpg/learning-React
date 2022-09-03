import './App.scss';
import Text from './Components/010/Text';
import { useState } from 'react';
import Two from './Components/010/Two';
import Letters from './Components/010/Letters';

function App() {

    const [textNow, setTextNow] = useState('');

    const [f1, setF1] = useState(false);
    const [f2, setF2] = useState(false);

    const [letters, setLetters] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <h2>TEXT: {textNow}</h2>
               
                <Text setTextNow={setTextNow} />
                <div className="container">
                    {f1 ? <div className="kv"></div> : null}
                    {f2 ? <div className="ap"></div> : null}
                </div>
                <Two setF1={setF1} setF2={setF2} />

                <h2 style={{textTransform: 'uppercase'}}>{letters}</h2>
                <Letters setLetters={setLetters} letters={letters}/>
            </header>
        </div>
    );
}

export default App;