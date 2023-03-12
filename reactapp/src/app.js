import React from "react";
class App extends React.Component{
    constructor(props){
    super(props)
    this.state={
       id:1,
       Bookname:"reactjs",
       author:"krishna",
       value:0

    }
    }
 Change=()=>{
   this.setState({
      id:2,
      Bookname:"HTML,css,javascript,reactjs",
      author:"harikrishna",

   })
 }
    increment=()=>{
      this.setState({
         value:this.state.value+1
      })
    }
    decrement=()=>{
      this.setState({
         value:this.state.value-1
      })
    }
    reset=()=>{
      this.setState({
         value:0
      })
    }
    i

copy=(e)=>{
   this.setState({
      hari:e.target.value
   })
}
      render(){
    return(
  
        
    <div>
        <h3>constructor method</h3>
        <p>
          id:{this.state.id}<br></br>
          Bookname:{this.state.Bookname}<br></br>
          author:{this.state.author}<br></br>
          <button onClick={this.Change}>update</button>
           <h3>value:{this.state.value}</h3>
           <button onClick={this.increment}>increment</button>
           <button onClick={this.decrement}>decrement</button>
           <button onClick={this.reset}>reset</button><br></br><br></br>
           <input type="text" onChange={this.copy}/>
           <h3>current value:{this.state.hari}</h3>
            <hr></hr>


           </p>
    </div>


    )

    }
    
}

export default App;

