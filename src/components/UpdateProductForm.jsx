import React from 'react'
import PropTypes from 'prop-types';



class UpdateProductForm extends React.Component {

    constructor(props) {
        super(props)

        var startDate = new Date().toISOString().slice(0, 10);
        var endDate = new Date();
        endDate.setDate(endDate.getDate() + 3652);
        endDate = endDate.toISOString().slice(0, 10);

        this.state = {
            "absoluteStartDate": startDate,
            "absoluteEndDate": endDate,
            "name": "",
            "pieces": "1",
            "hide": false
        };

        this.handleChange = this.handleChange.bind(this)
        this.update = this.update.bind(this)
        this.cancel = this.cancel.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
        this.hide = this.hide.bind(this)

    }

    componentDidMount() {
        this.setState({producer: this.props.producer,
        startDate: this.props.product.startDate,
        endDate  : this.props.product.endDate})
    }


    handleChange(e) {
        let attribute = e.target.id
        this.setState({
            [attribute]: e.target.value
        })
        console.log("attribute " + attribute)
        console.log("value " + e.target.value)
    }

    update() {
        let newProduct = {
            name: this.props.product.name,
            pieces: this.props.product.pieces,
            producer: this.state.producer,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        this.props.callbacks.update(newProduct)
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

        let myStyle700 = {

            maxWidth: "60%"
        }
        return (
            <div className="w3-container" id="update-product" >
                <div className="w3-content" style={myStyle700}>

                    <div className="w3-wide">
                        <div>
                            <label>valid du :</label>
                            <input id="startDate"
                                   type="date"
                                   className="w3-input w3-padding-16 w3-border"
                                   name="bday"
                                   min={this.props.absoluteStartDate}
                                   value={this.props.product.startDate}
                                   onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>au :</label>
                        <input id="endDate"
                               type="date"
                               className="w3-input w3-padding-16 w3-border"
                               name="bday"
                               min={this.props.absoluteStartDate} max={this.state.absoluteEndDate}
                               value={this.props.product.endDate}
                               onChange={this.handleChange}></input>
                        </div>

                        <div>
                            <p> </p>
                            <button className="w3-button w3-black"
                                    type="submit"
                                    onClick={this.update}>valider</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

UpdateProductForm.propTypes = {
    product: PropTypes.object,
    callbacks: PropTypes.object.isRequired
}

export default UpdateProductForm


