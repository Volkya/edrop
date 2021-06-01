import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logo.png';
import axios from 'axios';

const categoriesApi = 'http://localhost:3200/categories/';

class Navigator extends Component{

    state = {
        cats: []
    };


    getCategories = () => {
        axios.get(`${categoriesApi}`).then(res => {
            console.log(res.data);
            const cats = res.data;
            this.setState({cats})
        })
            .catch(console.log)
    };


    componentDidMount() {
        this.getCategories();
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand title-little" href="/"><img className="logonav" src={Logo} alt={true}/></a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Conectate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Registrate</a>
                        </li>
                     </ul>
                    <ul className="navbar-nav ml-auto">
                        {this.state.cats.map(category =>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {category.public_name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">SUBCATEGORIA</a>
                                </div>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="/novedades">Novedades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ofertas">Ofertas</a>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-nav mr-auto">
                    <i className="nav-item">
                        <a href="/cart" className="nav-link">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </a>
                    </i>
                </ul>
            </nav>

        )
    }
}

export default Navigator;
