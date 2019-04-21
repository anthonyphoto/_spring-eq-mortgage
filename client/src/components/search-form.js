import React from 'react';
import {connect} from 'react-redux';
// import {reduxForm, Field, reset, SubmissionError, focus} from 'redux-form';
// import Input from './input';
// import {required, nonEmpty, email} from './validators'
import {updateSearch} from '../actions/loan';
import './form.css';

// import './header-bar.css';

export class SearchForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         attr: "Loan Number"
    //     }
    // }


    updateSearch(key) {
        this.props.dispatch(updateSearch(key));

        // this.setState({ attr });
    }


    render() {
        return (
            <React.Fragment>

                    {/* <div className="title flt mgt">* Key Word Search 
                    </div> */}

                    <input
                        className="inp"
                        type="text" 
                        name="key"
                        onChange={e => this.updateSearch(e.target.value)}
                        placeholder="Key Word Search as You Type"
                    />
    
            </React.Fragment>

        );
    }

}

// export default reduxForm({
//         form: 'search',
//         onSubmitFail: (error, dispatch) => dispatch(focus('search', Object.keys(error)))
//     })(InputForm);


export default connect()(SearchForm);
