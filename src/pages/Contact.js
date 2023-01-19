import { Component } from "react";
import ContactPage from "../components/designedpages/ContactPage";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class Contact extends Component{
    render(){
        return <div>
            <WebsiteNavigation></WebsiteNavigation>
            <ContactPage></ContactPage>
            <Footer></Footer>
        </div>
    }
}
export default Contact;