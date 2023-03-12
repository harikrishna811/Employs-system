import Employetab from "./employetable";
import Empform from "./empform";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App14() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Employetab />} />
          <Route path="/Empform" element={<Empform />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App14;
