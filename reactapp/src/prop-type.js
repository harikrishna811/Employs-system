// npm i prop-types


import PropTypes from "prop-types"

function App9({ name, age, city, state, country }) {
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

// validating datatypes
App9.PropsTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string
}

App9.defaultProps = {
    name: "harikrishna",
    age: "22",
    city: ["jammalmadugu", " jmd", " hyderabad"],
    state: "andhrapradesh",
    country: "india"



}

export default App9;
