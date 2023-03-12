//state means passing information with in  saame compoenet only
// it can be mutable --- we have chn ace to update the data

// declare with in {} only
//two methods are there 1.constuctor method 2.with out constructor method both are us only class only not function
import React from "react";
class App12 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            empid: "208R1E0023",
            empname: "hari",
            empcomapny: "tcs",
            data: "",
            value: 0
        }

    }
    Change = () => {
        this.setState({
            empid: "1522131352",
            empname: "harikrishna",
            empcomapny: "tcs and infosis",


        })

    }
    datachange = (e) => {
        this.setState({
            data: e.target.value
        })
    }
    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    decrement = () => {
        this.setState({
            value: this.state.value - 1
        })
    }
    reset = () => {
        this.setState({
            value: 0
        })
    }

    render() {
        return (
            <div>
                <h3>
                    EMP ID:{this.state.empid}<br></br>EMP NAME:{this.state.empname}<br></br>EMP COMAPNY:{this.state.empcomapny}
                </h3>
                <button onClick={this.Change}>update</button>
                <br></br><br></br>
                <input type="text" placeholder="please enter the data" onChange={this.datachange} />
                <br></br>
                <h3>curentvalue: {this.state.data} </h3>
                <h3>value:{this.state.value}</h3>
                <button onClick={this.increment}>Increment </button>
                <button onClick={this.decrement} >Decrement</button>
                <button onClick={this.reset}>Reset</button>

            </div >
        )

    }
}
export default App12;