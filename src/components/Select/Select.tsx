import React from "react";

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
    onClick: () => void
    isClicked: boolean
}
type ItemType = {
    title: string,
    value: any

}

const Select = (props: SelectPropsType) => {

  /*  const showValues = () => {
        if (props.isClicked) {
            props.items.map((e) => <div key={e.value} onClick={()=>props.onChange(e.value)}>{e.title}</div>)
        }
    }*/
    return (
        <div>
            <div onClick={props.onClick}>
                {props.items.find((e) => e.value === props.value)?.title || "Select an option"}
            </div>
           {/* <>{showValues()}</>*/}
            {props.isClicked && (
                <div>
                    {props.items.map((e) => (
                        <div
                            key={e.value}
                            onClick={() => props.onChange(e.value)}
                        >
                            {e.title}
                        </div>
                    ))}
                </div>)}
        </div>

    )
}

export default Select;