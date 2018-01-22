import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.css'

class About extends Component {


    render() {


        return (

            <div className="w3-container" id="about">
                <div className="w3-content" id="about-content">
                    <h5 className="w3-center w3-padding-64">
                        <span className="w3-tag w3-wide">GESTION DES PRODUITS</span>
                    </h5>
                    <p>The {this.props.producer.toUpperCase()} was founded in blabla by Mr. Smith in lorem ipsum dolor sit
                        amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.
                    </p>
                    <p>
                        In addition to our full espresso and brew bar menu, we serve fresh
                        made-to-order breakfast and
                        lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                    <div className="w3-panel w3-leftbar w3-light-grey">
                        <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh
                            is the new sweet.</i></p>
                        <p>Chef, Coffeeist and Owner: Liam Brown</p>
                    </div>
                    <img src="./images/coffeeshop.jpg" className="w3-margin-top">

                    </img>
                </div>
            </div>
        )
    }
}

About.propTypes = {
    producer: PropTypes.string.isRequired,
}

export default About


