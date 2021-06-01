import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';

const productsApi = 'http://localhost:3200/products/';

class MainSlider extends Component{

state = {
    products: []
}

getProducts = () => {
    axios.get(`${productsApi}`).then(res => {
        console.log(res.data.docs);
        const products = res.data.docs;
        this.setState({ products });
    })
        .catch(console.log)
}

componentDidMount() {
    this.getProducts();
}

render() {
    return(
        <Carousel showThumbs={false} autoPlay={true}>
            {this.state.products.map(product =>
                <div>
                    <img src={product.coverImage} alt={product.title}/>
                </div>
            )}


        </Carousel>
    )
}



} // end mainslider

export default MainSlider;

















