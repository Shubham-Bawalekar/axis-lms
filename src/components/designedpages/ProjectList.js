import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

function ProjectList() {
    const [projectData, setProjectData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8189/projects").then((response)=>{
            console.log(response);
            setProjectData(response.data);
            console.log("data",projectData);

             
            
        })
    },[])
  return (
    <div>
      <Container>
        <br />
        <center>
          <h1>Project List</h1>
        </center>
        <hr />
      </Container>
      <br />
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          {
            projectData.map((ele)=>{
                console.log("ele: ",ele);
                function myFunction() {
                    sessionStorage.setItem("projectId", ele.projectId);
                    sessionStorage.setItem("projectName", ele.projectName);
                    sessionStorage.setItem("projectDescription", ele.projectDescription);
                    sessionStorage.setItem("projectFlowChart", ele.projectFlowChart);

                }

                return(
                <Container>
                    <div class="card shadow-lg bg-body">
                                <h5 class="card-header bg-dark text-light">{ele.projectName}</h5>
                                    <div class="card-body bg-danger text-light bg-gradient">
                                        <h5 class="card-title">{ele.projectDescription}</h5>
                                        
                                        <a href="/project-details" class="btn btn-danger bg-dark text-light " onClick={myFunction}>Explore </a>
                                    </div>
                            </div><br/>
                </Container>);
            })
          }
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  );
}
export default ProjectList;
