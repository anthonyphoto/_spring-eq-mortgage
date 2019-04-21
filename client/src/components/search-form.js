import React from 'react';
import {connect} from 'react-redux';

import {updateSearch} from '../actions/loan';
import './form.css';


export class SearchForm extends React.Component {


    updateSearch(key) {
        this.props.dispatch(updateSearch(key));

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

export default connect()(SearchForm);
