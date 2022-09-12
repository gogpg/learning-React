import './App.scss';
import ColorSquares from './Components/016/ColorSquares';
import Count from './Components/016/Count';


function App() {

    return (
        <div className="App">
            <header className="App-header">
            <h1>Total Recall 3</h1>
            <ColorSquares />
            <Count/>
            </header>
        </div>
    );
}

export default App;