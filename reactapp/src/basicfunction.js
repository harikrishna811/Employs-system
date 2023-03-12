// function method is there" Hooks methods"
// number of hooks metyhods there
//1.useState()-------->similar to state---->state,setstate
//          state ---->intial informstion there ---->with in the component
// update----- setstate
// syntax------->
//             const[state,setstate]=useState() 
//2.useEffect()
//3.useContext()
//4.useRef()
// these are very importent(mejorly use)
import React,{ useState } from "react";
// function method is there" Hooks methods"
// number of hooks metyhods there
//1.useState()-------->similar to state---->state,setstate
//          state ---->intial informstion there ---->with in the component
// update----- setstate
// syntax------->
//             const[state,setstate]=useState() 
//2.useEffect()
//3.useContext()
//4.useRef()
// these are very importent(mejorly use)



function App2(){
    const [name,setname]=useState("HARIKRISHNA")
    const[other,setother]=useState("lakshmi")
    const[value,setvalue]=useState(0)
    const[info,setinfo]=useState("")
  
    const changename=()=>{
        setname("krishna its a brand")
      }
     const incvalue=()=>{
        setvalue(value+1)
     }  
     const decvalue=()=>{
        setvalue(value-1)
     }
     const reset=()=>{
        setvalue(0)
     }
     const current=(e)=>{
        setinfo(e.target.value)
     }
       return(
        <div>
            
            <h1 onClick={changename}>{name}</h1>
            <button onClick={changename}>update</button>
            <h1>value:{value}</h1>
            <button onClick={incvalue}>increse</button>
            <button onClick={decvalue}>decrese</button>
            <button onClick={reset}>reset</button> 
            <h2>type hereanything:</h2>
            <input type="text"onChange={current}></input>
            <h1>current information:{info}</h1>
        </div>
       )





    }