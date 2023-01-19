import { Component } from "react";
import EmployeeLoginPage from "../components/designedpages/EmployeeLoginPage";
import Footer from "../components/layout/Footer";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import EmployeeProfilePage from "../components/designedpages/EmployeeProfilePage";

class EmployeeProfile extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation>
            <EmployeeProfilePage></EmployeeProfilePage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeProfile;
