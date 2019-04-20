import React from 'react';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import './landing-page.css';
import InputForm from './input-form';
import ListSec from './list-sec';

export default class LandingPage extends React.Component{
    render(){
        return (
        <main className='main_bg fi bd'>
        <img src="/img/logo-alt-tm.svg" alt="SpringEQ Logo" width="150px" />
            <InputForm />
            <ListSec />

        </main>
        );
    }
}

