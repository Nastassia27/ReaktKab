import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemType = {
    title: string,
    value: any

}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClickTitle:(collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    titleAccordion: string
    onClickTitle:()=>void
}

type AccordionBodyType={
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return(
        <div>
            <AccordionTitle titleAccordion={props.title} onClickTitle={()=>props.onClickTitle(!props.collapsed)}/>
            {! props.collapsed &&  <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClickTitle}>{props.titleAccordion}</h3>
        </div>
    )
}


function AccordionBody(props: AccordionBodyType) {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => <li onClick={()=>props.onClick(item.value)} key={index}>{item.title}</li>)}
            </ul>
        </div>
    )
}


/*export function Accordion(props: AccordionPropsType) {
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
