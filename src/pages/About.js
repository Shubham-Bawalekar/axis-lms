import { Component } from "react";
import AboutPage from "../components/designedpages/AboutPage";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class About extends Component{
    render(){
        return <div>
            <WebsiteNavigation></WebsiteNavigation>
            <AboutPage></AboutPage>
            <Footer></Footer>
        </div>
    }
}
export default About;