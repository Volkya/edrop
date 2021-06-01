import React, {Component} from "react";
import './CRM.css';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Vendedores from "./VendedoresList";
import Ventas from "./VentasList";
import Categorias from "./CategoriasList";
import Subcategorias from "./SubcategoriasList";
import Products from "./ProductList";

class CRM extends Component{
    render() {
        return(
            <div>
                <Navbar/>
                <br/>
                <div className="container-fluid px-5">
                    <div className="row">
                        <div className="col-lg-12 px-0 ml-sm-auto px-4">
                            <Router>
                                <Route path="/admin/vendedores/" component={Vendedores}/>
                                <Route path="/admin/ventas/" component={Ventas}/>
                                <Route path="/admin/categorias/" component={Categorias}/>
                                <Route path="/admin/subcategorias/" component={Subcategorias}/>
                                <Route path="/admin/">
                                    <Products/>
                                </Route>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}


export default CRM;
