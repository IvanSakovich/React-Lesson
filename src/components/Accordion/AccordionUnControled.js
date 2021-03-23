import React, {useState} from 'react';
//import {v1} from 'uuid';

function AccordionUnControled (props) {
  //const collapsed = false;
  let [collapsed, setCollapsed] = useState(false); 
     return <div>
    <AccordionTitle title={props.title}/>
    <button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>
    { collapsed === false && <AccordionBody />}
  </div>
  }
  

function AccordionTitle (props) {
  return <div>
  <h3>{props.title}</h3>
  </div>
} 

function AccordionBody () {
  return <div>
  <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
}

export default AccordionUnControled;
