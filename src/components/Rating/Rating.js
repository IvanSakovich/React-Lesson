import React from 'react';
//import {v1} from 'uuid';
import  StarRating from './Star/StarRating';

// type RatingProps = {
//   value: number
// }

function Rating (props) {
      if (props.value === 0 | 1 | 2 | 3 | 4 | 5) {
        return (<div>
          <StarRating selected={props.value > 0} onClick={props.onClick} value={1}/>
          <StarRating selected={props.value > 1} onClick={props.onClick} value={2}/>
          <StarRating selected={props.value > 2} onClick={props.onClick} value={3}/>
          <StarRating selected={props.value > 3} onClick={props.onClick} value={4}/>
          <StarRating selected={props.value > 4} onClick={props.onClick} value={5}/>
          </div>)
}

}
export default Rating;
