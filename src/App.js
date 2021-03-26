import React, {useState} from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import UnControledOnOff from './components/OnOff/UnControledOnOff';
//import {v1} from 'uuid';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import AccordionUnControled from './components/Accordion/AccordionUnControled';
import UnControledRating from './components/Rating/UnControledRating';

const App = () => {
    let [ratingValue, setRatingValue] = useState(2);
    let [accordionCollapsed, setAccordionCollapsed] = useState(true);
    let [switchOn, setSwitchOn] = useState(false);
    return (
        <div className="App">
            <UnControledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <AccordionUnControled title={"AccordionUnControled"}/>
            <Accordion
                title={"AccordionMenu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}/>
            <OnOff On={switchOn} onChange={setSwitchOn}/>
            <UnControledOnOff onChange={setSwitchOn}/>
        </div>
    );
}

function PageTitle(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default App;
