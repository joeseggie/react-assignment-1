import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>{props.text}</p>
            <p>Random text</p>
        </div>
    );
};

export default userOutput;
