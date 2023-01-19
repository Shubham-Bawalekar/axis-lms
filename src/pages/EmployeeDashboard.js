import { Component } from "react";
import EmployeeDashboardPage from "../components/designedpages/EmployeeDashboardPage";
import Footer from "../components/layout/Footer";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";

class EmployeeDashboard extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation>
            <EmployeeDashboardPage></EmployeeDashboardPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeDashboard;
