import React, {Component} from 'react';
import axios from "axios";

const categoriesApi = 'http://localhost:3200/categories/';

class Categorias extends Component{

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


    render() {
        return(
            <div>
                {this.state.cats.map(category =>
                    <a href="/">{category.name}</a>
                )}
            </div>
        )
    }
}

export default Categorias;
