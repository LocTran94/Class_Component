import './App.css';
import Demo from './demo'
import {useEffect, useLayoutEffect, useReducer, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";
//
// const gifts = [
//     'cpu',
//     'memory',
//     'card'
// ]
//
// const render = () => (
//     gifts[Math.floor(Math.random() * gifts.length)]
// )
//
// function App() {
//     const [state, setState] = useState('chưa có phần thưởng')
//
//
//     return (
//         // <Demo title ='linh'></Demo>
//         <>
//             <h1>{state}</h1>
//             <button onClick={() => {
//                 setState(render())
//
//             }}>click
//             </button>
//
//
//         </>
//
//     );
// }


// hiện todo list
//
// function App() {
//
//     const [state, setState] = useState([])
//     const [state1, setState1] = useState('')
//
//
//     const add = (user) => {
//         setState(abc => [...abc, user])
// }
//
//     return (
//         <>
//             {state.map(user => (
//                 <ul>
//                     <li>{user}</li>
//                 </ul>
//             ))}
//
//             <input type="text" value={state1} onChange={(event) => {
//                setState1(event.target.value)
//
//             }}/>
//             <button onClick={() => {
//                 add(state1)
//                 setState1('')
//
//             }}>Add
//             </button>
//         </>
//     );
// }











// hook -useEffect with time function
//
// function App(){
//     const [countdown,setCountdown] = useState(180)
//     useEffect(()=>{
//         setInterval(()=>{
//             setCountdown(prev=>prev-1)
//         },2000)
//
//
//     },[])
//
//     return(
//         <>
//             <button  >click</button>
//             <h1>{countdown}</h1>
//         </>
//     )
//
// }














//up image
// function App(){
//     const [file,setFile] = useState('')
// return(
//     <>
//         <input type="file"
//                onChange={(event)=>{
//                 const file =  event.target.files[0]
//                    file.ok = URL.createObjectURL(file)
//                    console.log(file.ok)
//                    setFile(file)
//                }}
//         />
//         <img src={file.ok}/>
//
//     </>
// )
// }









 // todo list with reducer
const initState= []
const reducer = (state,action)=> {

    switch (action.type) {
        case 'ADD':
            state = [action.payload, ...state];

            return state

        default:
            return 'sai oke ?'

    }
}

function App() {
    const [job, setJob] = useState('');
    const handleOnChange = (e)=> {
      setJob(e.target.value);
    }

    const add = ()=> {
        dispatch({type: 'ADD', payload: job});
        setJob('')
    }
    let [state,dispatch] = useReducer(reducer,initState);
    return(
        <>
            <input  type="text" value={job} onChange={handleOnChange} />
            <button  onClick={
                add


            } >ADD</button>
            {state.map(job =>(
                <h1>{job}</h1>
                )

            )}
        </>
    )

}

export default App;
