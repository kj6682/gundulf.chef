import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    remove() {
        this.props.callbacks.remove(this.props.product.name, this.props.product.pieces);
    }

    open() {
        document.getElementById('id' + this.props.index).style.display = 'block';
    }

    close() {
        console.log("close")
        document.getElementById('id' + this.props.index).style.display = 'none';
    }


    render() {
        let index = this.props.index;
        let myStyle = "w3-container w3-card product-" + index % 2;
        let modalStyle = {paddingTop: "300px"}
        return (
            <li className={myStyle}>
                <div className="w3-row">
                    <div className="w3-col m8 l8">
                        <p className="smallText">{this.props.product.producer}</p>
                        <h2>{this.props.product.name} ({this.props.product.pieces})</h2>
                        {(this.props.product.endDate === "9999-12-31") ?
                            <p className="smallText">valid du: {this.props.product.startDate} </p> :
                            <p className="smallText">valid du: {this.props.product.startDate}
                                au: {this.props.product.endDate}</p>
                        }
                        <p className="smallText"><i className="red">lun.</i> mar. mer. jeu. ven. <i
                            className="red">sam.</i> <i className="red">dim.</i></p>

                    </div>
                    <div className="w3-col m4 l4">
                        <p></p>
                        <button className="w3-button w3-light-green"
                                type="submit"
                                onClick={this.open}>editer
                        </button>

                        <button className="w3-button w3-black"
                                type="submit"
                                onClick={this.remove}>effacer
                        </button>
                    </div>
                </div>

                <div id={"id" + index} style={modalStyle}className="w3-modal">
                    <div className="w3-modal-content w3-card-4">
                        <header className="w3-container w3-light-green">
                            <span onClick={this.close}
                                  className="w3-button w3-display-topright">&times;</span>
                            <h2>{this.props.product.name} ( {this.props.product.pieces} )</h2>
                        </header>
                        <div className="w3-container w3-text-black">
                            <p>Some text. Some text. Some text.</p>
                            <p>Some text. Some text. Some text.</p>
                        </div>
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

                           
                           
