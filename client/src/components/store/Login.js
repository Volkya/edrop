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
                                    <h1 className="bg-second text-center p-5 text-uppercase">¡Te extrañamos!</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" name="email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" name="password"/>
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
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
