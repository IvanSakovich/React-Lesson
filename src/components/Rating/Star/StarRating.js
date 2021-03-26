import React from 'react';
//import {v1} from 'uuid';

function StarRating (props){
  return <span onClick={() => {props.onClick(props.value)}}>
       {props.selected ? <b>star</b> : "star"}
  </span>
}
export default StarRating;
