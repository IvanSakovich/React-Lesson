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
      if (props.value === 0) {
        return (<div>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          </div>)
      }
      if (props.value === 1) {
        return (<div>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          </div>)
      }
      if (props.value === 2) {
        return (<div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          </div>)
      }
      if (props.value === 3) {
        return (<div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          </div>)
      }
      if (props.value === 4) {
        return (<div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          </div>)
      }
      if (props.value === 5) {
        return (<div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
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
