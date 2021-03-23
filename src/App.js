import React from 'react';
import './App.css';
//import {v1} from 'uuid';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import AccordionUnControled from './components/Accordion/AccordionUnControled';
import UnControledRating from './components/Rating/UnControledRating';

const App = () => {

  return (
    <div className="App">
      {/* <PageTitle title={"1"}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <PageTitle title={"2"}/>
      <Rating value={4}/>
      <Accordion title={"Accordion1"}/>
      <Accordion title={"Accordion2"}/> */}
      <UnControledRating />
      <Rating value={1}/>
      <AccordionUnControled title={"AccordionUnControled"}/>
      <Accordion title={"Accordion1"} collapsed={false}/>
      <OnOff/>
    </div>
  );
}

function PageTitle(props) {
  return <div>
    <h1>{props.title}</h1>
  </div>
}

export default App;
