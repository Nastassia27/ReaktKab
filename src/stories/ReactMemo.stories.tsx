import {memo, useState} from "react";

export default {
    title: 'ReactMemoDemo',
}
const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}
const Users = memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState<number>(0)
    const[users, setUsers] = useState<Array<string>>(['admin', 'admin2', 'admin3'])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, 'Dima'])}>Add User</button>
        <NewMessagesCounter count={counter}/>
    <Users users={users}/>
        </>
)

}