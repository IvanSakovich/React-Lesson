import React, {useState} from 'react';
import s from './OnOff.module.css';
//import {v1} from 'uuid';

// type On&OffProps = {
//   value: number
// }

function OnOff(props
               // : RatingProps
) {

    //let On = true;


    const OnStyle = {
        backgroundColor: props.On ? "green" : "white",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        padding: "2px"
    };

    const OffStyle = {
        backgroundColor: props.On ? "white" : "red",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        marginLeft: "2px",
        padding: "2px"
    }

    const OStyle = {
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        border: "2px solid black",
        //boxSizing: "border-box",
        //display: "inlineBlock",
        marginLeft: "5px",
        backgroundColor: props.On ? "green" : "red"
    }
    return (<div>
        <button onClick={() => {
            props.onChange(true)
        }} style={OnStyle} className={s.itemOn}>On
        </button>
        <button onClick={() => {
            props.onChange(false)
        }} style={OffStyle} className={s.itemOff}>Off
        </button>
        <span style={OStyle} className={s.itemO}>XX</span>
    </div>)

}

export default OnOff;
