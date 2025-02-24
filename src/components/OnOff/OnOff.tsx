import {useState} from "react";
import {Button} from "./Button";

type OnOffType = {
    clicked: boolean;
    setClicked: (clicked: boolean) => void;

}

export const OnOff = (props: OnOffType) => {


    const offStyle = {
        width: '30px',
        height:'30px',
        border: '1px solid black',
        backgroundColor: "red",
        display:'inline-block',
        marginLeft:'5px',
    }
    const defaultStyle = {
        width: '30px',
        height:'20px',
        border: '1px solid black',
        backgroundColor: "white",
        display:'inline-block',
        marginLeft:'5px',
    }

    const onStyle = {
        width: '30px',
        height:'30px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor: "green",
    }

    return (
        <div>
            <Button class={props.clicked ? onStyle : defaultStyle} onClick={() => props.setClicked(!props.clicked)} title={'On'}/>
            <Button class={!props.clicked ? offStyle : defaultStyle} onClick={() => props.setClicked(!props.clicked)} title={'Off'}/>
       {/* <div style={onStyle}></div>
        <div style={offStyle}></div>
        <div style={indicatorStyle}></div>*/}
        </div>
    )
}