import { async } from "@firebase/util";
import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import {signup,login,logout} from "./firebase.js"







function App6(){
    const emailRef=useRef()
    const passwordRef=useRef()
    const [load,setLoad]=useState(false)
    async function handlesignup(){
        setLoad(true)
        await signup(emailRef.current.value,passwordRef.current.value)
    }
    return(
        <div>
            <label>Email:</label>
            < input Ref={emailRef}type="email"></input>
            <br></br><br></br>
            <label>Password:</label>
            <input Ref={passwordRef}type="password"></input>
            <br></br><br></br>
            <button onClick={handlesignup}>signup</button>
            <button>login</button>
            <button>logout</button>

        </div>
    )
} 
export default App6;