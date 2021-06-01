import React, {Component} from 'react';

class Connect extends Component{

    render() {
        return(
            <div className="row bg-info text-white">
                <div className="col-xs-12 col-md-12 text-center">
                    <a className="nav-link text-white" href="/login">Conectate</a>
                    |
                    <a className="nav-link text-white" href="/register">Registrate</a>
                </div>
            </div>
        )
    }

}

export default Connect;

