import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import WebsiteNavigation from "../layout/WebsiteNavigation";

function EmployeeList(){
    const [employeeData, setEmployeeData]=useState([]);
   
    
    
    useEffect(()=>{
        axios.get("http://localhost:8200/employees").then((response)=>{
            // console.log(response);
            setEmployeeData(response.data);
            console.log("data",employeeData);

            for(var i=0; i<response.data.length; i++){

            }
            
            
        })
    },[])

    return(
        <div>
            <WebsiteNavigation></WebsiteNavigation>
           <Container><br/><center><h1>Employee List</h1></center><hr/></Container><br/>
            {
                employeeData.map((ele)=>{
                    console.log("ele:",ele.empName);
                    return(
                        <div>
                            <Container>  
                            <div class="card shadow-lg bg-body">
                                <h5 class="card-header bg-dark text-light">{ele.empName}</h5>
                                    <div class="card-body bg-danger text-light bg-gradient">
                                        <h5 class="card-title">{ele.empDesignation}</h5>
                                        <p class="card-text">Address: {ele.empAddress}</p>
                                        <p class="card-text">Project: {ele.empProjectName} | E-mail: {ele.empEmail} | Supervisor: {ele.supervisorName}</p>
                                        {/* <a href="#" class="btn btn-danger bg-dark text-light">View project </a> */}
                                    </div>
                            </div><br/></Container>
                        </div>
                        
                    )
                })
            }

            <Container>
            
            </Container>
        </div>
    )
}
export default EmployeeList;