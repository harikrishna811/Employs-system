import { Link, useNavigate } from "react-router-dom";

export function Contact() {
    const navigate = useNavigate()
    const update = () => {
        navigate("/a")
    }

    return (
        <div>
            <h1>this is contact page</h1>
            <button onClick={update}>change</button>
            <button><Link to="/d" ></Link> Back</button>
        </div>

    )
}



export function Notice() {
    return (
        <div>
            <h1>this is notice page</h1>
        </div>

    )
}

