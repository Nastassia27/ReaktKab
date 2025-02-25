import {Meta, StoryObj} from '@storybook/react';


import React, {useRef, useState} from "react";



export default  {
    title: 'Input',
   // component: UncontrolledRating,
}


export const UncontrolledInput=()=>{
    return(
        <div>  <input/>

        </div>
    )
}
export const ControlledInputWithFixedValue=()=>{
    return(
        <div>  <input value={'IT-incubator'}/>
        </div>
    )
}

export const UncontrolledInputWithTrackValue=()=>{
    const[value, setValue]=useState('')
    return(
        <div>  <input onChange={(e)=>{setValue(e.currentTarget.value)}} />{value}
        </div>
    )
}

export const GetValueUncontrolledValue=()=>{
    const[value, setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save =()=>{
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)}
    return(
        <div>  <input ref={inputRef} />
            <button onClick={save}>Save</button>
            Actual value - {value}
        </div>
    )
}

