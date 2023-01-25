import { Container } from "@mui/system";
import axios from "axios";
import { useState } from "react";




function AddStakeholder(){
    const [stakeholderName, setStakeholderName] = useState("");
    const [stakeholderEmail, setStakeholderEmail] = useState("");
    const [stakeholderMobNo, setStakeholderMobNo] = useState();
    const [projectId, setProjectId] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        let stakeholderData = {stakeholderName,stakeholderEmail,stakeholderMobNo,projectId};
        console.log("stakeholder data: ",stakeholderData);
        axios.post("http://localhost:8300/stakeholder", stakeholderData).then((response) => {
          console.log(response);
          alert("stakeholder added");
          window.location.assign("/stakeholder-list")
        });   
        
    }
    
    return(
        <div>
            <Container>
                <br/><h1><center>Add Stakeholder</center></h1><hr/><br/>
                <div class="shadow p-3 mb-5 bg-white rounded">
                <form onSubmit={handleSubmit} class="row g-3" >
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="enter name"
                value={stakeholderName} onChange={(e)=>setStakeholderName(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputPassword4"
                placeholder="stakeholder123@gmail.com"
                value={stakeholderEmail} onChange={(e)=>setStakeholderEmail(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword4"
                placeholder="9876543210"
                value={stakeholderMobNo} onChange={(e)=>setStakeholderMobNo(e.target.value)}
              ></input>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Project id
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword4"
                placeholder="005"
                value={projectId} onChange={(e)=>setProjectId(e.target.value)}
              ></input>
            </div>          
            <div class="col-12">
              <button type="submit" class="btn btn-danger bg-gradient">
                Add Stakeholder
              </button>
            </div>
          </form>
                </div>
            </Container>
        </div>
    );
}
export default AddStakeholder;