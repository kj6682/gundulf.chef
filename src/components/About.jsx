import React, {Component} from 'react';


class About extends Component {


    render() {

        let myStyleJustification = {
            textAlign: "justify",
            textJustify: "inter-word"
        }
        let myStyle700 = {
            width: "60%",
            maxWidth: "700"
        };

        let myStyle1000 = {
            width: "100%",
            maxWidth: "1000px"
        };

        return (

            <div className="w3-container" id="about">
                <div className="w3-content" style={myStyle700}>
                    <h5 className="w3-center w3-padding-64">
                        <span className="w3-tag w3-wide">ABOUT THE CAFE</span>
                    </h5>
                    <p style={myStyleJustification}>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
                        amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ.
                    </p>
                    <p style={myStyleJustification}>
                        In addition to our full espresso and brew bar menu, we serve fresh
                        made-to-order breakfast and
                        lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                    <div className="w3-panel w3-leftbar w3-light-grey">
                        <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh
                            is the new sweet.</i></p>
                        <p>Chef, Coffeeist and Owner: Liam Brown</p>
                    </div>
                    <img src="./images/coffeeshop.jpg" style={myStyle1000} className="w3-margin-top">

                    </img>
                </div>
            </div>
        )
    }
}


export default About

