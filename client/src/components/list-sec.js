import React from 'react';
import {connect} from 'react-redux';
import ListItem from './list-item';
import './list-sec.css';

export function ListSec(props) {

    const filterList = props.filterList;
    const listJsx = []; // List of records in JSX

    for (let i = 0; i < filterList.length; i++) {
        listJsx.push(
            <ListItem key={filterList[i].loan_number} item={filterList[i]} keyLower={props.keyLower} />
        );
    }

    if (listJsx.length === 0) {
        listJsx.push(<li key="none" className='li_main bd_bot'>
                        <div className='w1'> </div>
                        <div className='w1 al-c'>No record found</div>
                        <div className='w1'> </div>
                    </li>);
    }

    return (
        <div>
            <ul className='al_center' aria-live='polite'>
                <li className='li_main bd_bot'>
                    <div className='w1 al-c li_title'>Loan Number</div>
                    <div className='w1 al-c li_title'>State</div>
                    <div className='w1 li_title'>Last Name</div>
                    <div className='w1 li_title'>First Name</div>
                    <div className='w1 li_title'> </div>
                </li>
                    {listJsx}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    filterList: state.loan.filterList,
    keyLower: state.loan.key
});

export default connect(mapStateToProps)(ListSec);