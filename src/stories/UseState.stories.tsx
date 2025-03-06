import {memo, useMemo, useState} from "react";

export default {
    title: 'Use State Demo',
}

function generateData() {
    return 1
}

export const Example = () => {
    //const initValue = useMemo(generateData,[])
    const [counter, setCounter] = useState<number>(generateData)
const changer = (state: number) => {
        return state+1
}

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )

}