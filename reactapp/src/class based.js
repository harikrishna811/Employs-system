
import React from "react"
import PropTypes from "prop-types"

class App10 extends React.Component {
    render() {

        return (
            <div>
                <h2>class based components</h2>
                <p>name:{this.props.name}</p>
                <p>age:{this.props.age}</p>
                <p>number:{this.props.number}</p>
                <p>gender:{this.props.gender}</p>
            </div>
        )
    }
}
App10.propType = {
    name: PropTypes.number,
    age: PropTypes.string,
    number: PropTypes.string,
    gender: PropTypes.string,

}

App10.defaultProps = {
    name: "harikrishna",
    age: "22",
    number: 7569020970,
    gender: "male"


}
class App11 extends React.Component {
    render() {
        const { cname, ceo, manger } = this.props
        return (
            <div>
                <p>company name:{this.props.cname}</p>
                <p>ceo:{this.props.ceo}</p>
                <p>manger:{this.props.manger}</p>
            </div>
        )
    }
}
App11.defaultProps = {
    cname: "harikrishna",
    ceo: "hari",
    manger: "krishna"
}
export default App11;