import React,{ useState} from 'react';
import './App.css';

import FetchData from './fetchdata'
import ExportDB from './exportdata'
import FetchDB from './fetchdb'

function App() {
  const [state, updator] = useState(
    {
      items:[]
    })
  return (
    <div className="app">
      <FetchData state={state} updator={updator}/>
      <ExportDB state={state} updator={updator}/>
      <FetchDB state={state} updator={updator}/>
      <div>
        <span>Repositories</span><br/>
        {
          // console.log("State ",state)
          state.items.map((v)=>{
            return <li key={v.id}>
              <h3>{v.name}</h3>
              <span>{v.url}</span>
            </li>
          })
        }
      </div>
    </div>
  );
}

export default App;


/* 
<App>
  <Fetch From API />
  <Export Overwrite To DB />
  <Fetch From DB />
</App>
*/