import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../assets/logo.png';
import {
    faAddressBook,
    faCartPlus,
    faClipboardList
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component{
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
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/productos/"><FontAwesomeIcon icon={faCartPlus}/> Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/categorias"><FontAwesomeIcon icon={faCartPlus}/> Categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/subcategorias"><FontAwesomeIcon icon={faCartPlus}/> Sub Categorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/ventas"><FontAwesomeIcon icon={faClipboardList}/> Ventas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin/vendedores"><FontAwesomeIcon icon={faAddressBook}/> Vendedores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Desconectarse</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;
