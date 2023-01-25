import { Container } from "@mui/system";
import WebsiteNavigation from "../layout/WebsiteNavigation";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProfile(){
    let projectId = sessionStorage.getItem('projectId');
  
    let empId = sessionStorage.getItem('empId');
    let empName = sessionStorage.getItem('empName');
    let empProjectName = sessionStorage.getItem('empProjectName');
    let empDepartment = sessionStorage.getItem('empDepartment');
    let empDesignation = sessionStorage.getItem('empDesignation');
    let supervisorName = sessionStorage.getItem('supervisorName');
    let empPassword = sessionStorage.getItem('empPassword');

    

 
 
  const [empEmail, setEmpEmail] = useState("");
  const [empAddress, setEmpAddress] = useState("");
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let empData = {empName,empDepartment,empProjectName,empDesignation,empEmail,supervisorName,empAddress,empPassword,projectId};
    console.log("emp data: ",empData);
    axios.put(`http://localhost:8200/employee/${empId}`, empData).then((response) => {
            console.log(response.data);
            alert("Employee Added");
            // window.location.assign("/expense-list");
        
        })
  }
    return(
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
           
            
            
            <div class="col-12">
              <button type="submit" class="btn btn-danger bg-gradient">
                Save
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
    );
}
export default EditProfile;