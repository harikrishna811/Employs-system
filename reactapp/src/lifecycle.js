// life cycles  --->looklike "useeffect"
// in "clasess" we can use life cycle
//1. Birth ------create
 // 2. Growth ----update
 // 3. Death ----delate
    // these things are exicuting autometically without triggring any function any button
//  4 phases is there
//1. initialization ----- stte, render
// 2. mounting------ 2 pre define components we have to update the data
         // 1. componentWillMount()----processing information
        // 2.componentDidMount()----- Updated
// 3.updating ---- recipt
      //1.componentWillUpdate()----
      //2.componentDidUpdate()----
// 4. unMounting ---delete ---destroy

import React from "react";

class App5 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"harikrishna",
            value:"its a brand"
            

        }
    }
    componentWillMount(){
        alert(" im lerning life cycle....")
    }
render(){
    return(
        <div>
            <h1> class life cycle</h1>
            <h2>{this.state.name}{this.state.value}</h2>
           <p id="ok"></p>
           <button onClick={this.delete}>delete</button>

        </div>
    )
}
componentDidMount(){
   setTimeout(() => {
    this.setState({
        value:"BRAND"

    })  
   
   }, 2000);
}
componentWillUpdate(){
    alert(" you have updates state values...?")
}
componentDidUpdate(){
    document.getElementById("ok").innerHTML="updated sates"+this.state.name

}

delete=()=>{
    this.setState({
        name:"",
        value:false
    })
}
}

export default App5;