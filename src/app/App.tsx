import React from 'react';
import { Route,Switch } from 'react-router-dom'
import './App.css';
import Home from '../home/Home'
// import Task from '../features/Task/ClassComponent/Task'
// import ThreeSceneFiber from '../features/ThreeJS/FunctionalComponent/ReactThreeFiber/ThreeSceneFiber';
// import ThreeScene from '../features/ThreeJS/ClassComponet/ThreeScene'
// import GetStarships from '../features/ConsumeSwapi/GetStarShips'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <Switch>
          <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;