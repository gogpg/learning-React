import './App.scss';
import Checkbox from './Components/008/Checkbox';
import Select from './Components/008/Select';
import Text from './Components/008/Text';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>FORM</h1>
                    <Text />
                    <Select />
                    <Checkbox/>
            </header>
        </div>
    );
}

export default App;