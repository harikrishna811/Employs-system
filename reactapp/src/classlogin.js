import React from "react"
class App13 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: "",
      email: "",
      password: "",
      cpassword: "",
      name: "",
      pass: "",


    }

  }

  changefullname = (e) => {
    this.setState({
      fullname: e.target.value


    })
  }
  changeemail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  changepass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  changeconfipass = (e) => {
    this.setState({
      cpassword: e.target.value
    })

  }
  changename = (e) => {
    this.setState({
      fullname: e.target.value


    })
  }


  changepas = (j) => {
    this.setState({
      pass: j.target.value
    })
  }


  formsubmit = () => {
    if (this.state.fullname.length <= 5) {
      alert("fullname must be >5 charecters")

    }
    else if (this.state.password !== this.state.cpassword) {
      alert("password not match")

    }
    else {
      alert("form submitted succussfully.....!")
      localStorage.setItem("FULLNAME", this.state.fullname)
      localStorage.setItem("EMAIL", this.state.email)
      localStorage.setItem("PASSWORD", this.state.password)
      localStorage.setItem("CONFIRM PASSWORD", this.state.cpassword)


    }
  }
  formsubmited = (event) => {
    event.preventDefault()
    //   const a=localStorage.getItem("FULLNAME")
    //   const b=local Storage.getItem("EMAIL")
    //   const c=localStorage.getItem("password")
    //  const d=localStorage.getItem("cpassword")
    if (this.state.fullname !== localStorage.getItem("FULLNAME") && this.state.email !== localStorage.getItem("EMAIL")) {
      alert("name does not match")
    }
    else {
      alert("login the page")

    }

  }
  render() {
    return (

      <div>
        <form onSubmit={this.formsubmit}>
          <h2>sign up</h2>
          <br></br>
          <label>FULLNAME:</label>
          <input value={this.state.fullname} required type="text" onChange={this.changefullname} />
          <br></br><br></br>
          <label>EMAIL:</label>
          <input value={this.state.email} required type="email" onChange={this.changeemail} />
          <br></br><br></br>
          <label>PASSWORD:</label>
          <input value={this.state.password} required type="password" onChange={this.changepass} />
          <br></br><br></br>
          <label>CONFIRM PASSWORD:</label>
          <input value={this.state.cpassword} required type="password" onChange={this.changeconfipass} />
          <br></br><br></br>
          <input required type="submit" value="SIGN UP" onSubmit={this.formsubmit} />

        </form>

        <form onSubmit={this.formsubmited}>
          <h2>login</h2>
          <br></br>
          <label>FULL NAME:</label>
          <input value={this.state.fullname} required type="text" onChange={this.changename} />
          <br></br><br></br>
          <label>EMAIL:</label>
          <input value={this.state.email} required type="email" onChange={this.changeemail} />
          <br></br><br></br>
          <label>PASSWORD:</label>
          <input value={this.state.pass} required type="password" onChange={this.changepas} />
          <br></br><br></br>
          <label>CONFIRM PASSWORD:</label>
          <input value={this.state.cpassword} required type="password" onChange={this.changeconfipass} />
          <br></br><br></br>
          <input type="submit" value="LOGIN" />

        </form>




      </div>







    )
  }
}




export default App13;