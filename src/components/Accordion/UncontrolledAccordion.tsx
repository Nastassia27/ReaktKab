import React, {forwardRef} from "react";

type UncontrolledAccordionProps = {
    title: string;
}
type AccordionTitlePropsType = {
    titleAccordion: string
    onClick:() => void
}
export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

    return (
        <>
            {/*<><AccordionTitle onClick={()=>{setCollapsed((collapsed) => !collapsed)}} titleAccordion={props.title}/></>*/}
            <><AccordionTitle onClick={()=>{setCollapsed(!collapsed)}} titleAccordion={props.title}/></>
            {! collapsed &&  <AccordionBody/>}
        </>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>true</li>
                <li>true</li>
                <li>false</li>
            </ul>
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