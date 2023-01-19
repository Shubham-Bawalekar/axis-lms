import classes from "./EmployeeProfilePage.module.css"
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function EmployeeProfilePage(){
    const empId = sessionStorage.getItem('empId');
    const location = useLocation();
    
    const [employee,setEmployee] = useState({});
    

    console.log(empId);
    async function getDetails(){
        await axios
        .get("http://localhost:8200/employee/"+empId[0].toString())
        .then((response)=>{
            // console.log(response.data);
            setEmployee(response.data);          
        });
        console.log(employee);
    }
    // console.log(empId);
    useEffect(()=>{
        getDetails();
    }, []);
    
    return(
        <div>           
        <div className={classes.myprofile}>
            <div className={classes.myprofileback}>
                <h1><b>Profile Details</b></h1>
                

                <p>Employee Id : {employee.empId} </p>
                <p>Name : {employee.empName}</p>
                <p>Designation: {employee.empDesignation}</p>
                <p>Department: {employee.empDepartment}</p>
                <p>Project Name: {employee.empProjectName}</p>
                <p>Email Id: {employee.empEmail}</p>
                <p>Address: {employee.empAddress}</p>
            </div>
        </div>
</div>
    )

}
export default EmployeeProfilePage;