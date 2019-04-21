import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, reset, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from './validators'
import {fetchLoanById, fetchLoanByAttr, fetchLoan} from '../actions/loan';
import './form.css';

export class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attr: "Loan Number"
        }
    }
    onSubmit(values) {
        const val = values.val;

        const attr = (values.attr) ? values.attr : 'loan_number';
        (attr === "loan_number") ? this.props.dispatch(fetchLoanById(val)) : this.props.dispatch(fetchLoanByAttr(attr, val));
    }

    updateAttr(attr_val) {
        const mapAttr = {
            "loan_number": "Loan Number",
            "first_name": "First Name",
            "last_name": "Last Name",
            "email": "Email",
            "state": "State (e.g. PA)"
        }
        const attr = mapAttr[attr_val];

        this.setState({ attr });
    }

    resetList(e) {
        e.preventDefault();
        this.props.dispatch(reset('search'));
        this.props.dispatch(fetchLoan());

    }

    render() {
        return (
            <form className="mgt-2" onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values))}>
                    <div className="title">Search by Loan Number or Attribute
                        <a href="reset" className="title" onClick={e => this.resetList(e)}>Reset List ></a>
                    </div>
                    <Field onChange={e=>this.updateAttr(e.target.value)} component="select" className="sel flt" id="attr" name="attr">
                        <option value="loan_number">Loan Number</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="email">Email</option>
                        <option value="state">State</option>
                    </Field>

                    <Field
                        component={Input} 
                        label=""
                        type="text" 
                        name="val"
                        placeholder={`Enter ${this.state.attr}`}
                        required
                        className="flt"
                        validate={[required, nonEmpty]}
                    />
    
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Search
                    </button>
                    <div className="clr"></div>
                </form>
        );
    }

}

export default reduxForm({
        form: 'search',
        onSubmitFail: (error, dispatch) => dispatch(focus('search', Object.keys(error)))
    })(InputForm);

