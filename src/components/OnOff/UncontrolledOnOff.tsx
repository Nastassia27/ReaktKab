import {useState} from "react";
import {Button} from "./Button";

type OnOffType = {


}

export const UncontrolledOnOff = (props: OnOffType) => {
      const [onClicked, setOnClicked] = useState(false)

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
            <Button class={onClicked ? onStyle : defaultStyle} onClick={() => setOnClicked(true)} title={'On'}/>
            <Button class={!onClicked ? offStyle : defaultStyle} onClick={() => setOnClicked(false)} title={'Off'}/>
       {/* <div style={onStyle}></div>
        <div style={offStyle}></div>
        <div style={indicatorStyle}></div>*/}
        </div>
    )
}