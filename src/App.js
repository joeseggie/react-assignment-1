import React, { useState } from 'react';
import './App.css';
import UserInput from './Demo/UserInput';
import UserOutput from './Demo/UserOutput';


const App = () => {

  const [ userInputState, setUserInputState ] = useState({
    userInput: [
      {text: 'Username'}
    ]
  });

  const userInputChangedHandler = (event) => {
    setUserInputState({
      userInput: [
        { text: event.target.value },
      ]
    });
  };
  
  return (
    <div className="App">
      <UserInput changed={userInputChangedHandler} />
      <UserOutput text={userInputState.userInput[0].text} />
    </div>
  );
}

export default App;
