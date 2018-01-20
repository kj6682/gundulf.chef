import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    handleChange(event) {
        this.props.callbacks.onUserInput(event.target.value)
    }

    render() {
        let myStyle = {
            paddingTop: "40px",
            paddingBottom: "32px"
        }
        let myStyle700 = {

            maxWidth: "700px"
        }
        return (
            <div class="w3-container" id="where" style={myStyle}>
                <div class="w3-content" style={myStyle700}>
                    <h5 class="w3-center w3-padding-48">
                        <span class="w3-tag w3-wide">LISTE DE PRODUITS</span>
                    </h5>
                    <p>Vous pouvez filtrer le produits par mot clé</p>
                    <input type="search"
                           placeholder="search"
                           value={this.props.filterText}
                           onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired,
    callbacks: PropTypes.object.isRequired

}

export default SearchBar

