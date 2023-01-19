import { Container } from "@mui/system";
import WebsiteNavigation from "../layout/WebsiteNavigation";
import { useState, useEffect } from "react";
import axios from "axios";

function AddEmployee() {
  const [empName, setEmpName] = useState("");
  const [empDepartment, setEmpDepartment] = useState("");
  const [empProjectName, setEmpProjectName] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empPassword, setEmpPassword] = useState("");
  const [projectId, setProjectId] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    let empData = {empName,empDepartment,empProjectName,empDesignation,empEmail,supervisorName,empAddress,empPassword,projectId};
    console.log("emp data: ",empData);
    axios.post("http://localhost:8200/employee", empData).then((response) => {
            console.log(response.data);
            alert("Employee Added");
            // window.location.assign("/expense-list");
        
        })
  }
  return (
    <div>
      <WebsiteNavigation></WebsiteNavigation>
      <br />
      <Container>
        <center>
          <h1>Add Employee</h1>
        </center>
        <hr /><br/>
        <div class="shadow p-3 mb-5 bg-white rounded">
          <form onSubmit={handleSubmit} class="row g-3" >
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="emp123@gmail.com"
                value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="enter password"
                value={empPassword} onChange={(e)=>setEmpPassword(e.target.value)}
              ></input>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
                value={empAddress} onChange={(e)=>setEmpAddress(e.target.value)}
              ></input>
            </div>
            <div class="col-4">
              <label for="inputAddress2" class="form-label">
                Employee name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Shubham"
                value={empName} onChange={(e)=>setEmpName(e.target.value)}
              ></input>
            </div>
            <div class="col-4">
              <label for="inputAddress2" class="form-label">
                Department
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="IT"
                value={empDepartment} onChange={(e)=>setEmpDepartment(e.target.value)}
              ></input>
            </div>
            <div class="col-md-4">
              <label for="inputCity" class="form-label">
                Designation
              </label>
              <input type="text" class="form-control" id="inputCity" value={empDesignation} onChange={(e)=>setEmpDesignation(e.target.value)}></input>
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Project name
              </label>
              <input type="text" class="form-control" id="inputCity" value={empProjectName} onChange={(e)=>setEmpProjectName(e.target.value)}></input>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Project id
              </label>
              <input type="number" class="form-control" id="inputZip"  value={projectId} onChange={(e)=>setProjectId(e.target.value)}></input>
            </div>
            <div class="col-6">
              <label for="inputZip" class="form-label">
                Supervisor name
              </label>
              <input type="text" class="form-control" id="inputZip"  value={supervisorName} onChange={(e)=>setSupervisorName(e.target.value)}></input>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-danger bg-gradient">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default AddEmployee;
