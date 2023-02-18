import {Component, useState} from "react";


export default function FComponent(){
    let [list,setList] = useState([
        {
            name: "loc",
            age:28
        },
        {
            name: "ngoc",
            age:28
        }
    ])
    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    return(
        <>
            {list.map(item=>(
                <h1>{item.name}-{item.age}</h1>
            ))}


            <input type="text" value={name} onChange={event => {
             setName(event.target.value)
            }}/>
            <input type="text" value={age} onChange={event => {
             setAge(event.target.value)
            }}/>


            <button onClick={()=>{
                setList([...list,{name:name,age:age}])
                setName('')
                setAge('')
            }}>save</button>

        </>
    )
}
