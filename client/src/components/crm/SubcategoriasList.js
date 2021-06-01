import React, {Component} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const categoriesApi = 'http://localhost:3200/categories/';
const subcategoriesApi = 'http://localhost:3200/subcategories/';

class CategoriasList extends Component{

    state = {
        categories: [],
        subcategories: []
    };

    getCategories = () => {
        axios.get(`${categoriesApi}`).then(res => {
            console.log(res.data);
            const categories = res.data;
            this.setState({categories});
        })
            .catch(console.log)
    }

    getSubcategories = () => {
        axios.get(`${subcategoriesApi}`).then(res => {
            console.log(res.data);
            const subcategories = res.data;
            this.setState({subcategories});
        })
            .catch(console.log)
    }


    componentDidMount() {
        this.getCategories();
        this.getSubcategories();
    }

    render() {
        return(
            <main>
                <div className="table-responsive">
                    <h1 className="bg-second text-center p-5">Subcategorias</h1>
                    <br />
                    <table className="table">
                        <thead className="bg-info text-white">
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Categoria</th>
                            <th>Identificador</th>
                            <th>Nombre pila</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.subcategories.map(subcategory =>
                            <tr className="text-center">
                                <td>{subcategory._id}</td>
                                <td>{subcategory.category}</td>
                                <td>{subcategory.name}</td>
                                <td>{subcategory.public_name}</td>
                                <td>
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/></button>
                                    {"  "}
                                    <button className="btn btn-primary"><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </main>
        )
    }
} // end component

export default CategoriasList;
