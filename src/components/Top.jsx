import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Top extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div class="w3-top">
                <div class="w3-row w3-padding w3-black">
                    <div class="w3-col s3">
                        <a href="#four" class="w3-button w3-block w3-black">FOUR</a>
                    </div>
                    <div class="w3-col s3">
                        <a href="#entremets" class="w3-button w3-block w3-black">ENTREMETS</a>
                    </div>
                    <div class="w3-col s3">
                        <a href="#chocolat" class="w3-button w3-block w3-black">CHOCOLAT</a>
                    </div>
                    <div class="w3-col s3">
                        <a href="#tartes" class="w3-button w3-block w3-black">TARTES</a>
                    </div>
                </div>
            </div>
        )
    }
}

Top.propTypes = {
    callbacks: PropTypes.object.isRequired,
}

export default Top


