import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.callbacks.remove(this.props.product.name, this.props.product.pieces);
    }


    render() {
        let index = this.props.index;
        let myStyle = "product-" + index%2
        return (
            <li className={myStyle}>
                <h4><b>{this.props.product.name}</b> ({this.props.product.pieces})</h4>
                <h4>{this.props.index}</h4>
                <p>{this.props.product.producer}</p>
                <p>valide du : {this.props.product.startDate}</p><p> au : {this.props.product.endDate} </p>
            </li>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    callbacks: PropTypes.object.isRequired,
}

export default Product     

                           
                           
