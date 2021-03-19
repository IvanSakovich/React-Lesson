import React from 'react';
//import {v1} from 'uuid';

// type StarProspType = {
//   select: boolean
// }

function Star (
   props
  //  : StarProspType
  ) {
    if (props.selected === true) {
      return <span><b>star </b></span>
    } else {
      return <span>star</span>
    }
}

export default Star;
