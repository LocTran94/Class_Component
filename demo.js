import {Component, useState} from "react";
//
//
export default function FComponent(props) {
//     let [list,setList] = useState([
//         {
//             name: "loc",
//             age:28
//         },
//         {
//             name: "ngoc",
//             age:28
//         }
//     ])
//     let [name,setName] = useState('')
//     let [age,setAge] = useState('')
//     return(
//         <>
//             {list.map(item=>(
//                 <h1>{item.name}-{item.age}</h1>
//             ))}
//
//
//             <input type="text" value={name} onChange={event => {
//              setName(event.target.value)
//             }}/>
//             <input type="text" value={age} onChange={event => {
//              setAge(event.target.value)
//             }}/>
//
//
//             <button onClick={()=>{
//                 setList([...list,{name:name,age:age}])
//                 setName('')
//                 setAge('')
//             }}>save</button>
//
//         </>
//     )
// }

console.log(props)
    const bro = [
        {name: "javascript"},
        {name: "php"},
        {name: "python"}
    ]

// cách 1
    let [a, b, c] = bro

    const ul = <ol>
        <li>{a.name}</li>
        <li>{b.name}</li>
        <li>{c.name}</li>
    </ol>


// cách 2

return (
    <>
        {ul}
        {/*{bro.map(item =>*/}
        {/*   <h1>{item.name}</h1>*/}
        {/*)}*/}

    </>
)
}