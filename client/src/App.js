import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Categories from './components/store/Categories';
import Landing from './components/static/Landing';
import CRM from './components/crm/CRM';
import MainSlider from './components/store/MainSlider';
import Links from './components/static/Links';
import Footer from './components/static/Footer';
import Login from './components/store/Login';
import Navbar from './components/store/Navbar';
import Register from './components/store/Register'
import Ofertas from "./components/store/Ofertas";
import Novedades from "./components/store/Novedades";
import Seller from './components/sellers/Panel';

function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/register">
                            <Navbar/>
                            <Register/>
                            <Links/>
                            <Footer/>
                        </Route>
                        <Route path="/login">
                            <Navbar/>
                            <Login/>
                            <Links/>
                            <Footer/>
                        </Route>
                        <Route path="/novedades">
                            <Navbar/>
                            <Novedades/>
                            <Links/>
                            <Footer/>
                        </Route>
                        <Route path="/ofertas">
                            <Navbar/>
                            <Ofertas/>
                            <Links/>
                            <Footer/>
                        </Route>
                        <Route path="/landing">
                            <Navbar/>
                            <Landing/>
                        </Route>
                        <Route path="/admin/">
                            <CRM/>
                        </Route>
                        <Route path="/vendedor">
                            <Seller/>
                        </Route>
                        <Route path="/terminosycondiciones">
                            <CRM/>
                        </Route>
                        <Route path="/atencionalcliente">
                            <CRM/>
                        </Route>
                        <Route path="/contacto">
                            <CRM/>
                        </Route>
                        <Route path="/" exact>
                            <Navbar/>
                            <MainSlider/>
                            <Categories/>
                            <Links/>
                            <Footer/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
