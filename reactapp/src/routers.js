//ROUTERS ---->link specific components one page to another page ("link tag")
//applicable both claass and functions

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { About, Home } from "./Home.js"
import { Contact, Notice } from "./contact.js";
import "./route.css"




function App4() {
    return (
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to="./a">Home</Link>
                    </li>


                    <li>
                        <Link to="./b">About</Link>
                    </li>
                    <li>
                        <Link to="./c">NOTICE</Link>
                    </li>
                    <li>
                        <Link to="./d">CONTACT US</Link>
                    </li>

                </ul>

                <Routes>
                    <Route path="/a" element={<Home />} />
                    <Route path="/b" element={<About />} />
                    <Route path="/c" element={<Notice />} />
                    <Route path="/d" element={<Contact US />} />

                </Routes>

            </Router>


        </div>
    )
}
export default App4;

