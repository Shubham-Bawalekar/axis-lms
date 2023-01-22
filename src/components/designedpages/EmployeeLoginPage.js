import classes from "./EmployeeLoginPage.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";

function EmployeeLoginPage(){
  const [wrong, setWrong] = useState('');
    const [empEmail,setEmpEmail]=useState("");
    const [empPassword, setEmpPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const empData = {empEmail,empPassword};
    console.log("emp data: ",empData);
    axios.get("http://localhost:8200/employees").then((response) => {
for(let i=0;i<response.data.length;i++){
  console.log(response.data[i].empEmail,response.data[i].empPassword);

  if(empEmail==response.data[i].empEmail && empPassword==response.data[i].empPassword){

    console.log("password match");
   
      sessionStorage.setItem("empId",parseInt( response.data[i].empId));
      sessionStorage.setItem("empName",response.data[i].empName);
      sessionStorage.setItem("email", empEmail);
      sessionStorage.setItem("password", empPassword);
    
    window.location.assign("/employeedashboard");
    alert("Welcome");
   break;

  }
  else{
    // alert("Wrong");
    setWrong("please enter correct mobile number or password");
    
  }

}

})
    
  }

    return(
        <div>
            <div className={classes.backgroundloginpage}></div>
            <form className={classes.loginform} onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <br/><br/><br/><br/>

                <input type="text" placeholder="Enter email id" value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)}></input><br/><br/>
                <input type="password" placeholder="Enter Password" value={empPassword} onChange={(e)=>setEmpPassword(e.target.value)}></input><br/>
                <button type="submit">LOGIN</button><br/>
                <p class="text-danger">{wrong}</p>
                <p>forget password?
                <Link to="/resetpassword" className={classes.clickhere}> Click here</Link>
            </p>
                 </form>
           
        
            
            </div>
    )
}
export default EmployeeLoginPage;

