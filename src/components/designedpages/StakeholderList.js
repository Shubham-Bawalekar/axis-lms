import { Container } from "@mui/system";
import WebsiteNavigation from "../layout/WebsiteNavigation";
import { useState, useEffect } from "react";
import axios from "axios";

function StakeholderList(){
    const [stakeholderData, setStakeholderData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8300/stakeholders").then((response)=>{
            console.log(response.data);
            setStakeholderData(response.data);
            console.log("stakeholder: ",stakeholderData);

           
            
            
        })
    },[])
    return(
        <div>

        {/* <WebsiteNavigation></WebsiteNavigation> */}

       <Container><br/><center><h1>Stakeholder List</h1></center><hr/></Container><br/>

        {

            stakeholderData.map((ele)=>{

                console.log("ele:",ele.stakeholderName);

                return(

                    <div>

                        <Container>

                        <div class="card shadow-lg bg-body">

                            <h5 class="card-header bg-dark text-light">{ele.stakeholderName}</h5>

                                <div class="card-body bg-danger text-light bg-gradient">

                                    <p class="card-title">Email: {ele.stakeholderEmail}</p>

                                    <p class="card-text">MobileNumber: {ele.stakeholderMobNo}</p>

                                    <p class="card-text">Project Id: {ele.projectId} </p>

                                    <a href="#" class="btn btn-danger bg-dark text-light">View project </a>

                                </div>

                        </div><br/></Container>

                    </div>

                   

                )

            })

        }



       
    </div>
    );
}
export default StakeholderList;