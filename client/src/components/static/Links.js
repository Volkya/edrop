import React, { Component } from 'react';

class Links extends Component{
    render() {
        return(
            <div className="container px-0 my-4">
                <div className="row p-0 m-0">
                    <div className="col-lg-4 text-center p-0">
                        <a href="/landing/#soporte" className="btn btn-danger d-block rounded-0">Términos y condiciones</a>
                    </div>
                    <div className="col-lg-4 text-center p-0">
                        <a href="/landing/#faq" className="btn btn-danger d-block rounded-0">Atención al cliente</a>
                    </div>
                    <div className="col-lg-4  text-center p-0">
                        <a href="/landing/#contacto" className="btn btn-danger d-block rounded-0">Contacto</a>
                    </div>
                </div>
            </div>


        )
    }
}


export default Links;
