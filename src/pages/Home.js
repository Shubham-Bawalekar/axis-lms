import { Component } from "react";
import HomePage from "../components/designedpages/HomePage";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class Home extends Component{
    render(){
        return <div>
            <WebsiteNavigation></WebsiteNavigation>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    }
}
export default Home