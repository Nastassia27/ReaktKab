import {Meta, StoryObj} from '@storybook/react';


import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";



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

export const ControlledInput=()=>{
    const[parentValue, setParentValue]=useState('')
    const onCHangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)}
    return(
        <div>  <input value={parentValue} onChange={onCHangeHandler} />
        </div>
    )
}
export const ControlledCheckbox=()=>{
    const[parentValue, setParentValue]=useState(true)
    const onCHangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)}
    return(
        <div>  <input type={'checkbox'} checked={parentValue} onChange={onCHangeHandler} />
        </div>
    )
}
export const ControlledSelect=()=>{
    const[parentValue, setParentValue]=useState<string| undefined>(undefined)
    const onCHangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return(
        <select value={parentValue} onChange={onCHangeHandler}>
            <option >none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moskow</option>
            <option value={'3'}>Tbilisi</option>
        </select>
    )
}


