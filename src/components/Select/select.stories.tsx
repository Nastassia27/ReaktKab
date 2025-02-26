import React, {ChangeEvent, useState} from "react";
import Select from "./Select";

export default {
    title: 'Select',
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (value: string) => {
        setParentValue(value)
        setClicked(false)
    }
    const [clicked, setClicked] = React.useState(false);
    const onClickHandler = () => {
        setClicked(!clicked);
    }

    return (
        <Select onChange={onChangeHandler}
                isClicked={clicked}
                items={[
                    {title: 'dimych', value: 1},
                    {title: 'nastya', value: 2},
                    {title: 'katya', value: 3}]}
                onClick={onClickHandler}
                value={parentValue}></Select>
    )
}
