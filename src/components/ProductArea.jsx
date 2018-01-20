import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar'
import ProductList from './ProductList.jsx';

class ProductArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search4me: ''
        }
        this.filter = this.filter.bind(this)
    }


    filter(searchTerm) {
        this.setState({search4me: searchTerm})
    }

    render() {
        let myStyle = {
            paddingTop: "40px",
            paddingBottom: "32px"
        }
        let myStyle700 = {

            maxWidth: "700px"
        }

        let searchBar = <SearchBar filterText={this.state.search4me}
                                   callbacks={{
                                       filter: this.filter,
                                   }}/>

        let productList = <ProductList products={this.props.products}
                                       filterText={this.state.search4me}
                                       callbacks={{
                                           add: this.props.callbacks.add,
                                           remove: this.props.callbacks.remove
                                       }}/>
        return (
            <div className="w3-container" id="where" style={myStyle}>
                <div className="w3-content" style={myStyle700}>
                    <h5 className="w3-center w3-padding-48">
                        <span className="w3-tag w3-wide">LISTE DE PRODUITS</span>
                    </h5>
                    <p>Vous pouvez filtrer le produits par mot clé</p>

                    {searchBar}

                    {productList}

                </div>
            </div>

        )
    }
}

ProductArea.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    producer: PropTypes.String,
    callbacks: PropTypes.object.isRequired
}

export default ProductArea