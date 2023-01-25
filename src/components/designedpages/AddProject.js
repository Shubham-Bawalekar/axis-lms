import { Container } from "@mui/system";
import { useState } from "react";
import axios from "axios";


function AddProject(){
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectFlowChart, setProjectFlowChart] = useState("");
    const handleSubmit = (e) => {

        e.preventDefault();
    
        let projectData={projectName,projectDescription,projectFlowChart};
    
        console.log("project data: ",projectData);
    
        axios.post("http://localhost:8189/project", projectData).then((response) => {
    
            console.log(response.data);
    
                alert("project Added");
                window.location.assign("/project-feed");
            })}
    return(
        <div><br/>
            <Container>
                <h1>Add project</h1><hr/>
                <div class="shadow p-3 mb-5 bg-white rounded">
                <form 
                onSubmit={handleSubmit}
                 class="row g-3" >
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Project Name
              </label>
              <input
                type="textarea"
                class="form-control"
                id="inputEmail4"
                // placeholder="enter name"
                value={projectName} onChange={(e)=>setProjectName(e.target.value)}
              ></input>
            </div>
            <div class="col-md-12">
              <label for="inputPassword4" class="form-label">
                Project Description
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                // placeholder="stakeholder123@gmail.com"
                value={projectDescription} onChange={(e)=>setProjectDescription(e.target.value)}
              ></input>

<label for="inputPassword4" class="form-label">
               Flowchart URL
              </label>

<input
                type="text"
                class="form-control"
                id="inputPassword4"
                // placeholder="stakeholder123@gmail.com"
                value={projectFlowChart} onChange={(e)=>setProjectFlowChart(e.target.value)}
              ></input>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-danger bg-gradient">
                Add project
              </button>
            </div>
            
                     
            
          </form>
                </div>
            </Container>
        </div>
    );
}
export default AddProject;