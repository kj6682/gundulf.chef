import React from 'react'
import PropTypes from 'prop-types';

import './AddProductForm.css';

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
        this.submit = this.submit.bind(this)
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

    submit(e) {
        let newProduct = {
            name: this.state.name,
            pieces: this.state.pieces,
            producer: this.state.producer,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
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

    hide(){
        var hide = !this.state.hide
        this.setState({hide: hide})
    }
    render() {
        let class4Group = (this.state.hide)?"group":"group hide"
        return (
            <div className="outer">
                <div className="show">
                    <h4 onClick={this.hide}>click me!</h4>
                </div>
                <form className="form">

                    <div className={class4Group}>
                        <label>Produit:</label>
                        <input id="name"
                               type="text"
                               name="produit"
                               className="item"
                               value={this.state.name}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={class4Group}>
                        <label>Nombre de pieces:</label>
                        <input id="pieces"
                               type="number"
                               className="item"
                               name="pieces"
                               value="1" min="1" max="12"
                               onChange={this.handleChange}/>
                    </div>
                    <div className={class4Group}>
                        <label>valable du :</label>
                        <input id="startDate"
                               type="date"
                               className="item"
                               name="bday"
                               min={this.props.startDate}
                               value={this.state.startDate}
                               onChange={this.handleChange}></input>
                    </div>
                    <div className={class4Group}>
                        <label>au :</label>
                        <input id="endDate"
                               type="date"
                               className="item"
                               name="bday"
                               min={this.props.startDate} max={this.state.endDate}
                               value={this.state.endDate}
                               onChange={this.handleChange}></input>
                    </div>
                    <div className={class4Group}>
                        <button className="item" onClick={this.remove}>valider</button>
                    </div>
                </form>
            </div>
        )
    }

}

AddProductForm.propTypes = {
    product: PropTypes.object,
    callbacks: PropTypes.object.isRequired
}

export default AddProductForm