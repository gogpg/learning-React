
import './App.scss';

function App() {

    const clicked = () => {
        console.log('labas')
        doJob()
    }
    const doJob = () => {
        console.log('hello')
    }

  return (
    <div className="App">
        
      <header className="App-header">
      <h1>STATE</h1>
      <button onClick = {clicked}>Click</button>
      </header>
    </div>
  );
}

export default App;