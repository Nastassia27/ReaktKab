type PropsType= {
    onClick: () => void,
    title: string
    class?: classType;

}
type classType={
    backgroundColor: string
}


export const Button=(props:PropsType)=>{
    return (
        <div style={props.class}>
        <button onClick={props.onClick}>{props.title}</button>
        </div>
    )
}