import React, {Component} from "react";
import Navbar from "../store/Navbar";

class Panel extends Component{
    render() {
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Mi publicidad</h1>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Mis comisiones</h1>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Mis ventas</h1>
                                </div>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}


export default Panel;
