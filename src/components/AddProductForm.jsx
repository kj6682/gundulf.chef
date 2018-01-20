import React from 'react'
import PropTypes from 'prop-types';



class AddProductForm extends React.Component {

    constructor(props) {
        super(props)

        var startDate = new Date().toISOString().slice(0, 10);
        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 3652);
        endDate = endDate.toISOString().slice(0, 10);

        this.state = {
            "startDate": startDate,
            "endDate": endDate,
            "name": "nom du produit",
            "pieces": "1",
            "hide": false
        };

        this.handleChange = this.handleChange.bind(this)
        this.add = this.add.bind(this)
        this.cancel = this.cancel.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
        this.hide = this.hide.bind(this)

    }

    componentDidMount() {
        this.setState({producer: this.props.producer})
    }


    handleChange(e) {
        let attribute = e.target.id
        this.setState({
            [attribute]: e.target.value
        })
        console.log("attribute " + attribute)
        console.log("value " + e.target.value)
    }

    add() {
        let newProduct = {
            name: this.state.name,
            pieces: this.state.pieces,
            producer: this.state.producer,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        console.log(newProduct)
        this.props.callbacks.add(newProduct)
    }

    cancel(e) {
        this.setState({product: this.props.product})
        this.props.callbacks.cancel();
    }

    getValidationState(elem) {
        const length = this.state[elem].length;
        if (length > 4) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    getValidationStatePieces() {

        if (this.state.pieces > 0) return 'success';
        return 'error';
    }

    hide() {
        var hide = !this.state.hide
        this.setState({hide: hide})
    }

    render() {
        let class4Group = (this.state.hide) ? "group" : "group hide"
        let myStyle = {
            paddingTop:"40px",
            paddingBottom: "32px"
        }
        let myStyle700 = {

            maxWidth: "700px"
        }
        return (
            <div className="w3-container" id="where" style={myStyle}>
                <div className="w3-content" style={myStyle700}>
                    <h5 className="w3-center w3-padding-48">
                        <span className="w3-tag w3-wide">NOUVEAU PRODUIT</span>
                    </h5>
                    <p>Ajoutez un produit avec ce formulaire</p>
                    <div className="w3-wide">
                        <div>
                            <label>nom du produit : </label>
                            <input id="name"
                                   type="text"
                                   name="produit"
                                   className="w3-input w3-padding-16 w3-border"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>nombre di pieces : </label>
                            <input id="pieces"
                                   type=" number"
                                   className="w3-input w3-padding-16 w3-border"
                                   name="pieces"

                                   onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label>valid du :</label>
                            <input id="startDate"
                                   type="date"
                                   className="w3-input w3-padding-16 w3-border"
                                   name="bday"
                                   min={this.props.startDate}
                                   value={this.state.startDate}
                                   onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>au :</label>
                        <input id="endDate"
                               type="date"
                               className="w3-input w3-padding-16 w3-border"
                               name="bday"
                               min={this.props.startDate} max={this.state.endDate}
                               value={this.state.endDate}
                               onChange={this.handleChange}></input>
                        </div>

                        <div>
                            <p> </p>
                            <button className="w3-button w3-black"
                                    type="submit"
                                    onClick={this.add}>valider</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

AddProductForm.propTypes = {
    product: PropTypes.object,
    callbacks: PropTypes.object.isRequired
}

export default AddProductForm


