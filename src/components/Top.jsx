import React, {Component} from 'react';
import './Top.css'

class Top extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleSmallMenu = this.toggleSmallMenu.bind(this);
    }

    handleChange(e) {
        this.props.callbacks.selectProducer(e.target.id);
        this.setState({toggle: false})
    }


    toggleSmallMenu() {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        let smallMenuClass = "w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-large";
        if(this.state.toggle){
            smallMenuClass = smallMenuClass + " w3-show"
        }

        return (
            <div id="top-nav-bar" className="w3-top">
                <div className="w3-bar w3-black w3-card w3-padding ">

                    <button id="burger"
                            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-left w3-padding-large w3-large"
                            onClick={this.toggleSmallMenu} title="Toggle Navigation Menu">
                        <i className="fa fa-bars"></i></button>
                    <button id="four" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-center"
                            onClick={this.handleChange}>FOUR
                    </button>
                    <button id="entremets" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-center"
                            onClick={this.handleChange}>ENTREMETS
                    </button>
                    <button id="chocolat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-center"
                            onClick={this.handleChange}>CHOCOLAT
                    </button>
                    <button id="tartes" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-center"
                            onClick={this.handleChange}>TARTES
                    </button>

                </div>
                <div id="smallMenu" className={smallMenuClass}>
                    <button id="four" className="w3-bar-item w3-button w3-padding-large"
                            onClick={this.handleChange}>FOUR
                    </button>
                    <button id="entremets" className="w3-bar-item w3-button w3-padding-large"
                            onClick={this.handleChange}>ENTREMETS
                    </button>
                    <button id="chocolat" className="w3-bar-item w3-button w3-padding-large"
                            onClick={this.handleChange}>CHOCOLAT
                    </button>
                    <button id="tartes" className="w3-bar-item w3-button w3-padding-large"
                            onClick={this.handleChange}>TARTES
                    </button>
                </div>
            </div>
        )
    }
}

export default Top


