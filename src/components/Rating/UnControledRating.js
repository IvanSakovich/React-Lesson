import React, {useState} from 'react';
//import {v1} from 'uuid';
import Star from './Star/Star';

// type RatingProps = {
//   value: number
// }

function UnControledRating(props
                           // : RatingProps
) {
    let [value, setValue] = useState(0)
    //  return ( <Star />)
    if (props.value === 0 | 1 | 2 | 3 | 4 | 5) {
        return (<div>
            <Star selected={value > 0} setValue={() => {
                setValue(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5)
            }}/>
        </div>)
    }
    {/* return (<div>
        <Star selected={false} setValue={setValue}/>
        <Star selected={false} setValue={setValue}/>
        <Star selected={false} setValue={setValue}/>
        <Star selected={false} setValue={setValue}/>
        <Star selected={false} setValue={setValue}/>
        </div>)*/
    }
}

export default UnControledRating;
