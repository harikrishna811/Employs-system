
import { useState } from "react";
function Empform() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const changeid = (e) => {
    setId(e.target.value)
  }
  const changename = (e) => {
    setName(e.target.value)
  }
  const changeemail = (e) => {
    setEmail(e.target.value)
  }
  const changemobile = (j) => {
    setMobile(j.target.value)
  }
  const formsubmit = () => {
    const data = { id, name, email, mobile }
    fetch("http://localhost:3006/employesdata", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        alert("succesfully saved")
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="text-center bg-primary-subtle">
      <form onSubmit={formsubmit}>
        <br></br>
        <div className="mb-3">
          <label className="form-label">
            id:-
          </label>
          <input type="number" value={id} onChange={changeid} id="exampleInputEmail1" aria-describedby="emailHelp" className="col-2 "
          />
        </div>
        <div className="mb-3">
          <label className="form-label">name:-  </label>
          <input type="text" value={name} onChange={changename} id="exampleInputEmail1" aria-describedby="emailHelp" className="col-2  " />
        </div>

        <div className="mb-3"> <label className="form-label"> email:- </label>
          <input type="email" value={email} onChange={changeemail} id="exampleInputEmail1" aria-describedby="emailHelp" className="col-2 " />
        </div>
        <div className="mb-3"><label className="form-label">mobile:-  </label>
          <input type="tel" id="exampleInputEmail1" aria-describedby="emailHelp" className=" col-2  " value={mobile} onChange={changemobile} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Empform;
