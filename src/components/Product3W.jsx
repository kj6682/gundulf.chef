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
        let myStyle = "w3-container w3-card product-" + index % 2;

        return (
            <li className={myStyle}>
                <div className="w3-row">
                    <div className="w3-col m8 l8">
                        <p className="smallText">{this.props.product.producer}</p>
                        <h2>{this.props.product.name} ({this.props.product.pieces})</h2>
                        {(this.props.product.endDate === "9999-12-31") ?
                            <p className="smallText">valid du: {this.props.product.startDate} </p> :
                            <p className="smallText">valid du: {this.props.product.startDate} au: {this.props.product.endDate}</p>
                        }
                        <p className="smallText"><i className="red">lun.</i> mar. mer. jeu. ven. <i className="red">sam.</i> <i className="red">dim.</i> </p>

                    </div>
                    <div className="w3-col m4 l4">
                        <p></p>
                        <button className="w3-button w3-light-green"
                                type="submit"
                                onClick={this.remove}>editer</button>

                        <button className="w3-button w3-black"
                                type="submit"
                                onClick={this.remove}>effacer</button>
                    </div>
                </div>
            </li>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    callbacks: PropTypes.object.isRequired,
}

export default Product

                           
                           
