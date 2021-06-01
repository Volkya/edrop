import React, {Component} from "react";
import Terminos from "./Terminos";
import Faq from "./Faq";
// import Contact from "./Contact";
import Footer from "./Footer";

class Landing extends Component{
    render() {
        return(
            <div>
                <div className="container-fluid px-0">
                    <Terminos/>
                    <Faq/>
                    {/*<Contact/>*/}
                    <Footer/>
                </div>
            </div>

        )
    }
}


export default Landing;
