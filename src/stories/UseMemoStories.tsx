import {memo, useMemo, useState} from "react";

export default {
    title: 'UseMemoStories',
}
const NewTitle = (props: any) => {
    return <div>{props.title}</div>
}
export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i < a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA *= i
        }
        return tempResultA
    }, [a]) //запомнить результат вычислений замемозировать, закешировать.


    for (let i = 1; i < b; i++) {
        resultB *= i
    }
    return (
        <>
            <NewTitle title={'Use Memo'}/>
            <input value={a} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>Result for A: {resultA}</div>
            <div>Result for B: {resultB}</div>

        </>
    )

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}
const Users = memo(UsersSecret) // поверяет поменялись ли входные пропсы
// и тогда только перерисовывает компоненту
//если стейт меняется не иммутабельно перерисовки тоже не будет

export const Example2 = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['admin', 'admin2', 'admin3'])
    const newArray = useMemo(() => {
        return users.filter((u) => u.toLowerCase().indexOf('A') > -1)
    }, [users])//[] - оодин раз бы посчиталось. запомнила и больше бы не перерисовывалось

    const addNewUser = ()=>{
        setUsers([...users, 'Dima'])
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addNewUser}>Add User</button>
            {counter}
            <Users users={newArray}/>
        </>
    )

}