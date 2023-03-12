import React from "react"
class App14 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coname: "",
            ofgmail: "",
            lettersnumbers: "",
            clettersnumbers: "",
            getname: "",
            getemail: "",
            getpassword: ""

        }
    }
    companyname = (k) => {
        this.setState({
            coname: k.target.value
        })
    }
    companygmail = (k) => {
        this.setState({
            ofgmail: k.target.value
        })
    }
    companypassword = (k) => {
        this.setState({
            lettersnumbers: k.target.value
        })
    }
    companyconfirmpassword = (k) => {
        this.setState({
            clettersnumbers: k.target.value
        })
    }
    submitform = () => {
        if (this.state.coname.length <= 5) {
            alert("plaese enter >5 charecters ")

        }
        else if (this.state.lettersnumbers !== this.state.clettersnumbers) {
            alert("please enter same password")

        }
        else {
            alert("form submitted good...!")
            localStorage.setItem("company name", this.state.coname)
            localStorage.setItem("offical gmail id", this.state.ofgmail)
            localStorage.setItem("password", this.state.lettersnumbers)
            localStorage.setItem("conform password", this.state.clettersnumbers)

        }
    }
    handlename = (e) => {
        this.setState({
            getname: e.target.value
        })

    }
    handleemail = (e) => {
        this.setState({
            getemail: e.target.value
        })

    }
    handlepassword = (e) => {
        this.setState({
            getpassword: e.target.value
        })
    }
    handlesubmited = (event) => {
        event.preventDefault()
        if (this.state.coname !== localStorage.getItem("companyname") && this.state.ofgmail !== localStorage.getItem("offical gmailid")) {
            alert("name does not match")
        }
        else {
            alert("login the page")

        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitform}>
                    <label>companyname:</label>
                    <input value={this.state.coname} type="text" placeholder="please enter company name" onChange={this.companyname} /><br></br><br />
                    <label>offical gmail id:</label>
                    <input value={this.state.ofgmail} type="email" placeholder="please enter offical email" onChange={this.companygmail} /><br></br><br />
                    <label>password:</label>
                    <input value={this.state.lettersnumbers} type="password" placeholder="please enter password" onChange={this.companypassword} /><br></br><br />
                    <label>conform password:</label>
                    <input value={this.state.clettersnumbers} type="password" placeholder="please enter confirm password" onChange={this.companyconfirmpassword} /><br></br><br />
                    <input type="submit" value="Signup" />

                </form>
                <form onSubmit={this.handlesubmited}>
                    <label>companyname:</label>
                    <input type="text" value={this.state.getname} placeholder="enter candidate name" onChange={this.handlename} /><br></br><br />
                    <label>offical gmailid:</label>
                    <input value={this.state.getemail} type="email" placeholder="please enter offical email" onChange={this.handleemail} /><br></br><br />
                    <label>password:</label>
                    <input type="password" value={this.state.getpassword} placeholder="enter strong password" onChange={this.handlepassword} /><br></br><br />

                    <input type="submit" value="login" />

                </form>
            </div>
        )
    }


}
export default App14;