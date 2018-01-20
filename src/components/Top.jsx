import React, {Component} from 'react';


class Top extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.callbacks.selectProducer(e.target.id);
    }

    render() {

        return (
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">
                    <div className="w3-col s3">
                        <button id="four" className="w3-button w3-block w3-black"
                                onClick={this.handleChange}>FOUR
                        </button>
                    </div>
                    <div className="w3-col s3">
                        <button id="entremets" className="w3-button w3-block w3-black"
                                onClick={this.handleChange}>ENTREMETS
                        </button>
                    </div>
                    <div className="w3-col s3">
                        <button id="chocolat" className="w3-button w3-block w3-black"
                                onClick={this.handleChange}>CHOCOLAT
                    </button>
                    </div>
                    <div className="w3-col s3">
                        <button id="tartes" className="w3-button w3-block w3-black"
                                onClick={this.handleChange}>TARTES
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top


