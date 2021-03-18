import React from 'react';
import './App.css';
//import {v1} from 'uuid';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
const App = () => {

  return (
    <div className="App">
      <AppTitle />
      <Rating />
      <Accordion />
    </div>
  );
}

function AppTitle() {
  return <div>
    App Title
  </div>
}

export default App;
