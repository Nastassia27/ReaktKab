import React, {useState} from 'react';
import './App.css';

import Rating, {RatingValueType} from "./components/Rating/Rating";
import {Accordion2} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    let [rating, setRating] = useState<RatingValueType>(0);
    let [accordionCollapse, setAccordionCollapse] = useState<boolean>(false);
    let [clicked, setClicked] = useState<boolean>(false);
    return (
        <div>
            <PageTitle title={'Hello my World'}/>
            {/*<Rating value={rating} onClick={setRating}/>
            <UncontrolledRating />*/}
           {/* <Accordion2 title={'List of fruits'} onClick={setAccordionCollapse} collapsed={accordionCollapse}/>*/}
        {/*    <Accordion2 title={'2222'} collapsed={false}/>*/}
           {/* <UncontrolledAccordion title={'Uncontrolled'} />*/}
            <UncontrolledOnOff/>
            <OnOff clicked={clicked} setClicked={setClicked} />
        </div>
    );
}

type PageTitlePropsType={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <>{props.title}</>
    )
}



export default App;
//export default Rating;
//export default Accordion
