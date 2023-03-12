import fetch from "node-fetch";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Employetab() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:3006/employesdata")
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        setData(resp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
  const Delete = (id) => {
    fetch("http://localhost:3006/employesdata/" + id, {
      method: "DELETE"
    })
      .then(() => {
        alert("deleted successfully")
        window.location.reload()
      })
  }


  return (
    <div>
      <div className="card bg-primary-subtle">
        <div className="title bg-primary ">
          <h2 className="text-center col-11 ">Besant Employe Mangement System</h2>
        </div>
        <br></br>
        <Link to="Empform" type="button" class="btn btn-primary col-1">
          Add New(+)
        </Link>
        <div className="card-body">
          <table className="table table-bordered border-primary">
            <thead className="bg-dark text-white">
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>

                      <a class="btn btn-info">Details</a>
                      <a type="button" class="btn btn-danger" onClick={() => { Delete(item.id) }}>Remove</a>

                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}
export default Employetab;
