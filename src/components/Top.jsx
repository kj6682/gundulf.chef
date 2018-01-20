import React, {Component} from 'react';


class Top extends Component {

    render() {

        return (
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">
                    <div className="w3-col s3">
                        <a href="#four" className="w3-button w3-block w3-black">FOUR</a>
                    </div>
                    <div className="w3-col s3">
                        <a href="#entremets" className="w3-button w3-block w3-black">ENTREMETS</a>
                    </div>
                    <div className="w3-col s3">
                        <a href="#chocolat" className="w3-button w3-block w3-black">CHOCOLAT</a>
                    </div>
                    <div className="w3-col s3">
                        <a href="#tartes" className="w3-button w3-block w3-black">TARTES</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top


