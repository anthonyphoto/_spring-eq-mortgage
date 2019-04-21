import React, {useState, useEffect, useContext} from 'react';
import './list-sec.css';

export default function ListItem(props) {

    const [collapse, setCollapse] = useState(false);


    const {first_name, last_name, email, address, city, state, zip, loan_number} = props.item;
    function toggleCollapse(e) {
        e.preventDefault();
        setCollapse(!collapse); // toggle collapse setting
    }

    function markKey(txt) {
        if (!props.keyLower) return txt;
        
        const offSet = txt.toLowerCase().search(props.keyLower);
        if (offSet < 0) return txt;

        const part1 = (offSet === 0) ? "" : txt.slice(0, offSet);
        const part2 = txt.slice(offSet, offSet + props.keyLower.length);
        const part3 = (txt.length === offSet + props.keyLower.length) ? "" :
                txt.slice(offSet +  props.keyLower.length);

        return <React.Fragment>{part1}<span className='r'>{part2}</span>{part3}</React.Fragment>;
    }

    return (
        <React.Fragment>
        { collapse ? 
            <React.Fragment key={`${loan_number}d`} >
                <li className='li_main'>
                <div className='w1 al-c'>{markKey(loan_number)}</div>
                <div className='w1 al-c'>{markKey(state)}</div>
                <div className='w1'>{markKey(last_name)}</div>
                <div className='w1'>{markKey(first_name)}</div>
                    <div className='w1'><a onClick={e => toggleCollapse(e)} href="collapse" className='thin'>Collapse ></a></div>
                </li>
                <li className='li_main bd_bot detail mgt-n'>
                    <div className='ind-l'>
                        <span className='detail-c'>Name:</span> {first_name} {last_name} <br />
                        <span className='detail-c'>Email:</span> &nbsp;<a className='detail' href={`mailto:${email}`}> {email}</a><br />
                        <span className='detail-c'>Address:</span> {address}, {city}, {state}, {zip}
                    </div>

                </li>

            </React.Fragment>
        :
            <li key={loan_number} className='li_main bd_bot'>
                <div className='w1 al-c'>{markKey(loan_number)}</div>
                <div className='w1 al-c'>{markKey(state)}</div>
                <div className='w1'>{markKey(last_name)}</div>
                <div className='w1'>{markKey(first_name)}</div>
                <div className='w1'><a onClick={e => toggleCollapse(e)} href="uncollapse" className='thin'>Detail ></a></div>
            </li>            
        }

        </React.Fragment>
    );
}
