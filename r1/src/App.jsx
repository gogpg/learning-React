//import { useEffect } from 'react';
//import { useState } from 'react';
import './App.scss';
import Kvadr from './Components/014/Kvadr';
import T2 from './Components/014/T2';
import T3 from './Components/014/T3';
import T4 from './Components/014/T4';
import T5 from './Components/014/T5';
import T6 from './Components/014/T6';
import T7 from './Components/014/T7';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         
          <h1>Total Recall 1</h1>
          <Kvadr/>
          <T2/>
          <T3/>
          <T4/>
          <T5/>
          <T6/>
          <T7/>
      </header>
    </div>
  );
}

export default App;