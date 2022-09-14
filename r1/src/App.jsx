import './App.scss';
import Color3 from './Components/017/Color3';
import Number from './Components/017/Number';
import Ten from './Components/017/Ten';



function App() {

    return (
        <div className="App">
            <header className="App-header">
            <h1>UseReducer</h1>
            <Color3/>
            <Number/>
            <Ten/>
            </header>
        </div>
    );
}

export default App;