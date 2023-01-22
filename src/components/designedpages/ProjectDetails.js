import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import WebsiteNavigation from "../layout/WebsiteNavigation";

function ProjectDetails(){
    let projectId = sessionStorage.getItem('projectId');
    let projectName = sessionStorage.getItem('projectName');
    let projectDescription = sessionStorage.getItem('projectDescription');
    const [employeeData, setEmployeeData]=useState([]);
    const [stakeholderData, setStakeholderData]=useState([]);

    // **********GETTING EMPLOYEES**********
    useEffect(()=>{
        axios.get("http://localhost:8200/employees").then((response)=>{
            // console.log(response);
            setEmployeeData(response.data);
            // console.log("data",employeeData);

            // for(var i=0; i<response.data.length; i++){
            //     if(response.data[i].projectId == projectId){
            //         setEmployeeData()
            //     }
            // }
            
            
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:8300/stakeholders").then((response)=>{
            console.log("response",response.data);
            setStakeholderData(response.data);
            console.log("stakeholder: ",stakeholderData);

           
            
            
        })
    },[])
    return(
        <div><WebsiteNavigation></WebsiteNavigation>
<br/><Container><center><h1>Project Details</h1></center><hr/><br/></Container>
<Container>
        <div class="row">
            <div class="col-3">
                <h2>Team</h2>
                {
                    employeeData.map((ele)=>{
                        // console.log("ele:",ele.empName);
                        if (ele.projectId == projectId){
                            // console.log("haha",ele.empName);
                        
                        return(
                            <div>
                                <Container>  
                                <ul class="list-group">
                                <li class="list-group-item list-group-item-danger">{ele.empName}</li>
                                </ul>
                                {/* <div class="card shadow-lg bg-body">
                                    <h5 class="card-header bg-dark text-light">{ele.empName}</h5>
                                        <div class="card-body bg-danger text-light bg-gradient">
                                            <h5 class="card-title">{ele.empDesignation}</h5>
                                            <p class="card-text">Address: {ele.empAddress}</p>
                                            <p class="card-text">Project: {ele.empProjectName} | E-mail: {ele.empEmail} | Supervisor: {ele.supervisorName}</p>
                                            <a href="#" class="btn btn-danger bg-dark text-light">View project </a>
                                        </div>
                                </div> */}
                                </Container>
                            </div>
                            
                        )}
                    })
                }
            </div>
            <div class="col-6">
                {/* <h2>project details</h2> */}
                <div class="card border-white shadow-sm bg-body">
  <div class="card-header list-group-item-danger">
  <div class="badge bg-danger text-wrap">
  Id: {projectId}
</div>
  </div>
  <div class="card-body">
  
<h5 class="card-title">{projectName}</h5>

    <p>{projectDescription}</p>
  </div>
</div>
            </div>
            <div class="col-3">
                <h2>Stakeholders</h2>
                {stakeholderData.map((ele) => {
        // console.log("ele:", ele.stakeholderName);
        if (ele.projectId == projectId){

        

        return (
          <div>
            <Container>
            <ul class="list-group">
                                <li class="list-group-item list-group-item-danger">{ele.stakeholderName}</li>
                                </ul>
              
            </Container>
          </div>
        );}
      })}
            </div>
        </div></Container>
        </div>
    );
}
export default ProjectDetails;