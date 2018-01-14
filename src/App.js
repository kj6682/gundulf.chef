import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'

import {get} from './api/client.jsx'
import {post} from './api/client.jsx'
import {deleteObject} from './api/client.jsx'

var producer = process.env.REACT_APP_PRODUCER
var uri_products = process.env.REACT_APP_BACKEND + '/api/products/' + producer

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: '',
            search4me: ''
        }
        this.filter = this.filter.bind(this)
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

    filter(searchTerm) {
        this.setState({search4me: searchTerm})
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
        let searchBar = <SearchBar filterText={this.state.search4me}
                                   callbacks={{
                                       onUserInput: this.filter,
                                   }}/>

        let productList = <ProductList products={this.state.products}
                                       product={this.state.newProduct}
                                       filterText={this.state.search4me}
                                       callbacks={{
                                           add: this.addProduct,
                                           remove: this.removeProduct
                                       }}/>

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{process.env.REACT_APP_PRODUCER}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                {searchBar}
                <p> {uri_products}</p>
                {productList}
            </div>
        );
    }
}

export default App;
