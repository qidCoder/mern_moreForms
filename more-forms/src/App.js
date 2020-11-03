import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";//import bootstrap
import React, {useState} from 'react';//import hook

function App() {
  //initialize state variables by creating a dictionary and settng key-value pairs
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    pw_confirm : ''
  });

  //function to capture event of keypress
  const handleFormChange = (e) =>{
    setState({
        ...state,
        [e.target.name] : e.target.value
    });
  }

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} handleChange={handleFormChange}/>
      <Display inputs={state}/>

    </div>
  );
}

export default App;
