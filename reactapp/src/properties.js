//props() nothing but properties means pass the information on ecpmponent to another component
/*function App8(Props) {
    return (
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>city:{props.city}</p>
            <p>state:{props.state}</p>
            <p>country:{props.country}</p>
        </div>
    )
}
export function props() {
    return (
        <div>
            <App8 name="harikrishna" age="22" city="jammlamadugu" state="andhrapradesh" countr="india" />
        </div>
    )
}

*/
// method-2
// de-structring method means make multiple line code with in single line code

function New({ name, age, city, state, country }) {
    // const { name, age, city, state, country } = Props
    return (
        <div>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p>city:{city}</p>
            <p>state:{state}</p>
            <p>country:{country}</p>



        </div>
    )
}


export default New;