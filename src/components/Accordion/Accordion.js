import React from 'react';
//import {v1} from 'uuid';
function Accordion () {
  return <div>
    <AccordionTitle />
    <AccordionBody />
  </div>
}

function AccordionTitle () {
  return <div>
  <h3>Menu</h3>
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
