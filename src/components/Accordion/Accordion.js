import React from 'react';
//import {v1} from 'uuid';

function Accordion (props) {
  // if (props.collapsed === true) {
  //   return <div>
  //   <AccordionTitle title={props.title}/>
  // </div>
  // } else {
     return <div>
    <AccordionTitle title={props.title}/>
    { props.collapsed === false && <AccordionBody />}
  </div>
  }
//}
  

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

export default Accordion;
