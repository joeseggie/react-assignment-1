import React from "react";
import './UserInput.css';

const userInput = props => {
    return (
        <div>
            <input 
                className='UserInput'
                placeholder='Enter username to display'
                type='text'
                onChange={props.changed}
                value={props.currentName} />
        </div>
    );
};

export default userInput;
