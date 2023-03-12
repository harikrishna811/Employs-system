



import React, { useState } from "react";


function Form() {

    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [fname1, setFname1] = useState("")
    const [email1, setEmail1] = useState("")
    const [password1, setPassword1] = useState("")



    const handleFname = (j) => {
        setFname(j.target.value)

    }


    const handleEmail = (j) => {
        setEmail(j.target.value)

    }

    const handlePassword = (j) => {
        setPassword(j.target.value)
    }

    const handleCpassword = (j) => {
        setCpassword(j.target.value)
    }







    const handleSubmit = (j) => {
        if (fname.length < 6) {
            alert("Enter name morethan six characters")
        }
        else if (password !== cpassword) {
            alert("Password does not match")
        }
        else {
            alert("form successfully submitted")
            localStorage.setItem("FirstName", fname)
            localStorage.setItem("Email", email)
            localStorage.setItem("Password", password)


        }
    }


    const handleFname1 = (e) => {
        setFname1(e.target.value)
    }
    const handleEmail1 = (e) => {
        setEmail1(e.target.value)
    }

    const handlePassword1 = (e) => {
        setPassword1(e.target.value)
    }

    const handleFun = () => {
        const a = localStorage.getItem("FirstName")
        console.log(a)
        const b = localStorage.getItem("Email")
        console.log(b)
        const c = localStorage.getItem("Password")
        console.log(c)


        if (a !== fname1) {
            alert("name doesnot match")
        }
        else if (b !== email1) {
            alert("email doesnot match")
        }
        else if (c !== password1) {
            alert("Password doesnot match")
        }
        else {
            alert("Login the page")
        }
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" value={fname} required onChange={handleFname} />
                <br /><br />
                <label>Email:</label>
                <input type="emial" value={email} required onChange={handleEmail} />
                <br /><br />
                <label>Password:</label>
                <input type="password" value={password} required onChange={handlePassword} />
                <br /><br />
                <label>Confirm Password</label>
                <input type="password" value={cpassword} required onChange={handleCpassword} />
                <br /><br />
                <input type="submit" value="signup " />
            </form>


            <h3>Login</h3>
            <form onSubmit={handleFun}>
                <label>Full Name:</label>
                <input type="text" value={fname1} required onChange={handleFname1} />
                <br /><br />
                <label>Email:</label>
                <input type="email" value={email1} required onChange={handleEmail1} />
                <br /><br />
                <label>Password:</label>
                <input type="password" value={password1} required onChange={handlePassword1} />
                <br /><br />
                <input type="submit" value="login" />
            </form>






        </div>
    )
}
export default Form;