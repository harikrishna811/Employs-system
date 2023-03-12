
import React, { useState } from "react";




function App2() {

    const [fname, setfname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [fname1, setfname1] = useState("")
    const [email1, setemail1] = useState("")
    const [password1, setpassword1] = useState("")



    const finame = (j) => {
        setfname(j.target.value)
    }
    const chaneemail = (j) => {
        setemail(j.target.value)
    }

    const chapassword = (e) => {
        setpassword(e.target.value)
    }
    const changeconfipass = (e) => {
        setcpassword(e.target.value)
    }
    const formsubmit = (j) => {
        if (fname.length <= 6) {
            alert("fullname must be >6 charecters")

        }
        else if (password !== cpassword) {
            alert("password not match")

        }
        else {
            alert("form submitted succussfully.....!")
            localStorage.setItem("Firstname", fname)
            localStorage.setItem("Email", email)
            localStorage.setItem("Password", password)
            localStorage.setItem("ConfirmPassword", cpassword)


        }
    }
    const finame1 = (e) => {
        setfname1(e.target.value)
    }
    const getemail1 = (e) => {
        setemail1(e.target.value)
    }

    const Password1 = (k) => {
        setpassword1(k.target.value)
    }
    const formsubmited = () => {
        const a = localStorage.getItem("Firstname")
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
            <form onSubmit={formsubmit}>
                <h3>sign up form</h3>
                <h3>fullname:</h3>
                <input type="text" value={fname} onChange={finame} />
                <h3>email:</h3>
                <input type="email" value={email} required onChange={chaneemail} />
                <h3>password:</h3>
                <input type="password" value={password} required onChange={chapassword} />
                <h3>confirm password:</h3>
                <input type="password" value={cpassword} required onChange={changeconfipass} />
                <br></br><br></br>
                <input type="submit" />





            </form>

            <h3>Login</h3>
            <form onSubmit={formsubmited}>
                <label>Full Name:</label>
                <input type="text" value={fname1} required onChange={finame1} />
                <br /><br />
                <label>Email:</label>
                <input type="email" value={email1} required onChange={getemail1} />
                <br /><br />
                <label>Password:</label>
                <input type="password" value={password1} required onChange={Password1} />
                <br /><br />
                <input type="submit" value="login" />
            </form>


        </div>
    )
}

export default App2;