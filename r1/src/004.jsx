
import './App.css';

import Cat from './Components/004/Cat';

import randomColor from './Functions/randColor';

const cats = [
   {id: 1, weight: 8, name: 'Pilkis'},
   {id: 2, weight: 5, name: 'Murka'},    
   {id: 3, weight: 2, name: 'Pūkis'},
   {id: 4, weight: 3, name: 'Rainis'},
   {id: 5, weight: 5, name: 'Brisius'}
];

function App() {
    return (
      <div className="App">
        <header className="App-header">
  
        <h1>Lists</h1>

        <h1>
            {
                [...'Dinozauras'].map((letters, index) => <span key={index} style={{color: randomColor()}}>{letters}</span>)
            }
        </h1>

        <div className="container">
                {
                    [...cats].sort((a, b) => a.name.localeCompare(b.name)).map(cat => <Cat key={cat.id} cat={cat} />)
                }
        </div>

        <div className="container">
                {
                    [...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat, i) => cat.weight < 4 ? null : <Cat i={i} key={cat.name} cat={cat} />)
                }
                </div>


         {/* <ul>
              {
                  [...cats].sort((a, b) => a.name.localeCompare(b.name)).map(cat => <li key={cat.id}>{cat.name}</li>)
              }
              {
                 [...cats].sort((a, b) => a.weight - b.weight).map((cat, i) => <li key={i}>{cat.weight}kg <i>{cat.name}</i></li>) 
              }
            </ul>*/}

       {/* <div className="container">
            <Cat catId = "id: 1" catName="name: Pilkis" weight="weight: 20"/>
            <Cat catId = "id: 2" catName="name: Rainis" weight="weight: 15"/>
            </div>*/}

      </header>
    </div>
  );
}

export default App;