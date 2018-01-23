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


var uri_products = process.env.REACT_APP_BACKEND + '/api/products/'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: '',
            producer: 'four'
        }

        this.addProduct = this.addProduct.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
        this.selectProducer = this.selectProducer.bind(this)
    }

    componentDidMount() {
        console.log("bloody cors " +uri_products + this.state.producer)
        this.setState({today: new Date().toISOString().slice(0, 10)})
        get(uri_products + this.state.producer).then((data) => {
            this.setState({products: data});
        });
    }

    selectProducer(producer){
        this.setState({producer: producer})
        get(uri_products + producer).then((data) => {
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
            "producer": this.state.producer,
            "status": "string"
        })

        post(uri_products + this.state.producer, newProduct).then(
            () => get(uri_products + this.state.producer, {page: 0}).then(
                (data) => {
                    this.setState({products: data, show: false, newProduct: {}});
                }
            )
        );
    }

    removeProduct(name, pieces) {
        deleteObject(uri_products + this.state.producer, name, pieces).then(() => get(uri_products + this.state.producer, {page: 0}).then((data) => {
            this.setState({products: data});
        }));
    }


    render() {

        return (
            <div className="App">

                <Top
                    callbacks={{selectProducer: this.selectProducer}}/>

                <Header producer={this.state.producer}/>
                <div className="w3-sand w3-grayscale w3-large">

                    <About producer={this.state.producer}/>


                    <AddProductForm product={this.state.newProduct}
                                    callbacks={{add:this.addProduct}}/>

                    <ProductArea products={this.state.products}
                                 producer={this.state.producer}
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
