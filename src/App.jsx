import Header from "./Header.jsx";
import UserInput from "./UserInput.jsx";
import Results from "./Table.jsx";
import { useState } from "react";

function App() {

//to store the input content from the user

  const [inputVal, setInputVal] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

//Lifting the state up as we need to pass th einputval as prop to the table component and also the userInput component

let inputIsValid = inputVal.duration >= 1;

function handleStore ( inputidentifier,newValue){
  setInputVal(prevInputVal =>{
      return {
          ...prevInputVal,
          [inputidentifier] : +newValue
      };
  });
}//returns the object with 2 values ...previnputval and inputidentifier
// ...prevInputVal stores the previous stored values
//we are copying all the old values into the new previnputval
  return (
    <>
    <Header/>
    <UserInput onChange = {handleStore} userInput = {inputVal}/>
    {!inputIsValid && <p className = "center">Please enter a duration greater than Zero</p> }
    {inputIsValid && < Results input = {inputVal} />}
    </>
    
  )
}

export default App
