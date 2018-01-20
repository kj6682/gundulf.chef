import React, {Component} from 'react';
import './Header.css'
import PropTypes from 'prop-types';


class Header extends Component {


    render() {

        let myStyle = {
            fontSize: "90px",
            height: "300px"
        };

        let hidden = {visibility: "hidden"}
        return (


            <header className="bgimg w3-display-container w3-grayscale-min"
                    id="home">


                <div className="w3-display-middle w3-center">
                    <div className="w3-text-white" style={myStyle}>PRODUITS<br/>{this.props.producer.toUpperCase()}</div>
                </div>

                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>
                <p style={hidden}>.</p>


                <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                    <span className="w3-tag">Open from 6am to 5pm</span>
                </div>
                <div className="w3-display-bottomright w3-center w3-padding-large">
                    <span className="w3-text-white">15 Adr street, 5015</span>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    producer: PropTypes.String
}

export default Header


