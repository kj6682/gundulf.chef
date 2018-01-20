import React, {Component} from 'react';
import './App.css';

import Top from './components/Top'
import Header from './components/Header'
import About from './components/About'

import ProductArea from './components/ProductArea'

import {get} from './api/client.jsx'
import {post} from './api/client.jsx'
import {deleteObject} from './api/client.jsx'
import AddProductForm from "./components/AddProductForm";

var producer = process.env.REACT_APP_PRODUCER
var uri_products = process.env.REACT_APP_BACKEND + '/api/products/' + producer

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: '',
        }

        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)

    }

    componentDidMount() {
        console.log(uri_products)
        this.setState({today: new Date().toISOString().slice(0, 10)})
        get(uri_products).then((data) => {
            this.setState({products: data});
        });
    }


    addProduct(product) {
        var newProduct = JSON.stringify({
            "startDate": product.startDate,
            "endDate": product.endDate,
            "id": 0,
            "name": product.name,
            "pieces": product.pieces,
            "producer": producer,
            "status": "string"
        })

        post(uri_products, newProduct).then(
            () => get(uri_products, {page: 0}).then(
                (data) => {
                    this.setState({products: data, show: false, newProduct: {}});
                }
            )
        );
    }

    removeProduct(name, pieces) {
        deleteObject(uri_products, name, pieces).then(() => get(uri_products, {page: 0}).then((data) => {
            this.setState({products: data});
        }));
    }


    render() {

        return (
            <div className="App">

                <Top/>
                <Header/>
                <div className="w3-sand w3-grayscale w3-large">
                    <About/>


                    <AddProductForm product={this.state.newProduct}
                                    callbacks={{add:this.addProduct}}/>

                    <ProductArea products={this.state.products}
                                 callbacks={{
                                     add: this.addProduct,
                                     remove: this.removeProduct,
                                 }}/>
                    

                </div>
                <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
                    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a> e tanta pazienza</p>
                </footer>
            </div>
        );
    }
}

export default App;
