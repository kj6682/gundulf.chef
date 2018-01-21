import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from './Product3W.jsx';


class ProductList extends Component {

    render() {

        let filteredProducts = this.props.products.filter(
            (product) => product.name.indexOf(this.props.filterText) !== -1
        ).sort(
            (a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return parseInt(a.pieces) - parseInt(b.pieces)
            });
        ;

        var products = filteredProducts.map((product, index) =>

            <Product
                key={product.name + product.pieces}
                product={product}
                index={index}
                callbacks={this.props.callbacks}/>
        );


        return (

            <ul className="products">
                {products}
            </ul>

        )
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string,
    callbacks: PropTypes.object.isRequired
}

export default ProductList