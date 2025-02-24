import React from "react";
import {RatingValueType} from "../Rating/Rating";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick:(collapsed: boolean) => void
}

type AccordionTitlePropsType = {
    titleAccordion: string
    onClick:()=>void

}

export function Accordion2(props: AccordionPropsType) {
    return(
        <div>
            <AccordionTitle titleAccordion={props.title} onClick={()=>props.onClick(!props.collapsed)}/>
            {! props.collapsed &&  <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.titleAccordion}</h3>
        </div>
    )
}


function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


/*
export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <>
                <AccordionTitle titleAccordion={props.title}/>
                <AccordionBody/>
            </>
        )
    } else {
        return (
            <>
                <AccordionTitle titleAccordion={props.title}/>
            </>
        )
    }

}*/
