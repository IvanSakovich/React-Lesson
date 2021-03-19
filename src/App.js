import React from 'react';
import './App.css';
//import {v1} from 'uuid';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
const App = () => {

  return (
    <div className="App">
      <PageTitle title={"1"}/>
      <Rating value={1}/>
      <PageTitle title={"2"}/>
      <Rating value={2}/>
      <Accordion title={"a1"}/>
      <Accordion title={"a2"}/>
    </div>
  );
}

function PageTitle(props) {
  return <div>
    <h1>{props.title}</h1>
  </div>
}

export default App;
