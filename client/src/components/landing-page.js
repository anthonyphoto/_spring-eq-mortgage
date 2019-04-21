import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {fetchLoan} from '../actions/loan';
import InputForm from './input-form';
import SearchForm from './search-form';
import ListSec from './list-sec';
import ErrorSec from './error-sec';
// import LoadingSec from './loading-sec';
import './landing-page.css';

export class LandingPage extends React.Component{

    componentDidMount() {
        this.props.dispatch(fetchLoan());
    }
    render() {
        if (this.props.error) {
            return  <ErrorSec err={this.props.error} />
        }

        let loadingJsx = "";
        if (this.props.loading) {
            loadingJsx = (
                <div className="loading">
                    <img src="/img/loading-3.gif" alt="loading" />
                </div>
            )
        }

        return (
        <main className='main-bg fi'>
            {loadingJsx}
            <div className='flx'>
                <div>
                    <a href="https://www.springeq.com/" target="_blank"><img src="/img/logo-alt-tm.svg" alt="SpringEQ Logo" width="150px" /></a>
                </div>
                <div className='m-div'>
                    <SearchForm />
                </div>
            </div>
            <br /><br />
            <div className='div'>
                <InputForm /> 
            </div>
            <ListSec />
        </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.loan.error,
        loading: state.loan.loading
    }
}

export default connect(mapStateToProps)(LandingPage);