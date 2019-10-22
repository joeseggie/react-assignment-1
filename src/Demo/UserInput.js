import React from "react";
import './UserInput.css';

const UserInput = props => {
    return (
        <div>
            <input className='UserInput' placeholder='Enter username to display' type='text' onChange={props.changed} />
        </div>
    );
};

export default UserInput;
