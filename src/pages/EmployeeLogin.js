import { Component } from "react";
import EmployeeLoginPage from "../components/designedpages/EmployeeLoginPage";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class EmployeeLogin extends Component{
    render(){
        return <div>
            <WebsiteNavigation></WebsiteNavigation> 
            <EmployeeLoginPage></EmployeeLoginPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeLogin;
