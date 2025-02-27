import React, {forwardRef} from "react";

type UncontrolledAccordionProps = {
    title: string;
}
type AccordionTitlePropsType = {
    titleAccordion: string
    onClick:() => void
}
type ActionType={
    type: string

}
export type StateType={
    collapsed: boolean
}
export const TOGGLE_COLLAPSED='TOGGLE-COLLAPSED'
export const reducer = (state: StateType, action: ActionType):StateType=>{
    switch(action.type){
        case TOGGLE_COLLAPSED:
           return {...state, collapsed: !state.collapsed}
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }

    /*if(action.type===TOGGLE_COLLAPSED){
        return !state
    }
    return state*/
}
export const UncontrolledAccordion = (props: UncontrolledAccordionProps) => {
  //const [collapsed, setCollapsed] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, {collapsed: false});

    return (
        <>
            {/*<><AccordionTitle onClick={()=>{setCollapsed((collapsed) => !collapsed)}} titleAccordion={props.title}/></>*/}
           {/* <><AccordionTitle onClick={()=>{setCollapsed(!collapsed)}} titleAccordion={props.title}/></>*/}
            <><AccordionTitle onClick={()=>{dispatch({type:'TOGGLE-COLLAPSED' })}} titleAccordion={props.title}/></>
            {! state.collapsed &&  <AccordionBody/>}
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