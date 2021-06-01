import React, {Component} from "react";

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    onUsernameChange(e){
        this.setState({username: e.target.value})
    }

    onPasswordChange(e){
        this.setState({password: e.target.value})
    }

    resetForm(){
        this.state({username: '', password: ''})
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return(
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto mt-5">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className="bg-second text-center p-5 text-uppercase">CREAR CUENTA</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                        <div className="form-group">
                                            <label htmlFor="username">Usuario</label>
                                            <input type="text" className="form-control" id="username" name="username"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Email</label>
                                            <input type="email" className="form-control" id="password" name="password"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Teléfono</label>
                                            <input type="tel" className="form-control" id="password" name="password"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Contraseña</label>
                                            <input type="password" className="form-control" id="password" name="password"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Confirmar contraseña</label>
                                            <input type="password" className="form-control" id="password" name="password"/>
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Crear cuenta</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;
