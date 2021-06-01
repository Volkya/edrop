import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";


class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="bg-dark p-3 text-white text-center">
                    <div className="row mt-4">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4 text-white">Localización</h4>
                            <p>eDrop - Moreto 1451 PB 5</p>
                            <p>Ciudad Autonoma de Buenos Aires</p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0 text-center">
                            <h4 className="text-uppercase mb-4 text-white">Contacto</h4>
                            <FontAwesomeIcon className="fa-w-16 fa-2x mb-3 text-muted" icon={faPhone}/>
                            <div>(+54) 11-3527-0572</div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <a href="http://qr.afip.gob.ar/?qr=yGilRYauWZHustZzRyd-tQ,," target="_F960AFIPInfo"><img alt={true} className="fiscal-img" src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" border="0"/></a>
                        </div>
                    </div>
                </footer>
                <div className="copyright pt-3 text-center container">
                    <p>Copyright @edrop 2020 | Todos los derechos reservados</p>

                </div>
            </div>


        )
    }
}

export default Footer;
