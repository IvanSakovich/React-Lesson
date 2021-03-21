import React from 'react';
//import {v1} from 'uuid';
import Star from './Star/Star';

// type RatingProps = {
//   value: number
// }

function Rating (props
  // : RatingProps
  ) {
  //  return ( <Star />)
      if (props.value === 0 | 1 | 2 | 3 | 4 | 5) {
        return (<div>
          <Star selected={props.value > 0}/>
          <Star selected={props.value > 1}/>
          <Star selected={props.value > 2}/>
          <Star selected={props.value > 3}/>
          <Star selected={props.value > 4}/>
          </div>)
}
      return (<div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        </div>)
}
export default Rating;
