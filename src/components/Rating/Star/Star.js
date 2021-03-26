import React from 'react';
//import {v1} from 'uuid';

function Star (props){
  return <span
      onClick={() => {props.setValue()}}>{props.selected ? <b>star</b> : "star"}
  </span>
}
export default Star;
