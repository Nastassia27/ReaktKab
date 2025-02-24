import React from "react";

type UncontrolledRatingProps = {}

type StarPropsType = {
    onClick: () => void
    /*value: 1|2|3|4|5*/
    selected: boolean

}
type classType = {
    fontWeight: string
}


function Star(props: StarPropsType) {
    const onStyle = {
        fontWeight: 'bold',
    }
    const defaultStyle = {
        fontWeight: 'normal',
    }
    return (
        <span style={props.selected ? onStyle : defaultStyle} onClick={props.onClick}>Star </span>
    )
    /* if (props.selected) {
         return <span onClick={props.onClick}><b>Star </b></span>
     } else {
         return <span>Star </span>
     }*/

}

export const UncontrolledRating = (props: UncontrolledRatingProps) => {

    const [value, setValue] = React.useState(0);

   /* let array = [
        1, 2, 3, 4, 5
    ]*/
/*    let mewArray = array.map((index) => (
        <Star key={index} onClick={() => {
            setValue(index)
        }} selected={value >= index}/>
    ))*/
    return (
        <>
            <h1>Stars:</h1>

            <Star selected={value> 0} onClick={()=>setValue(1)} />
            <Star selected={value> 1} onClick={()=>setValue(2)} />
            <Star selected={value> 2} onClick={()=>setValue(3)}  />
            <Star selected={value> 3} onClick={()=>setValue(4)}  />
            <Star selected={value> 4} onClick={()=>setValue(5)}  />
        </>

    )
}