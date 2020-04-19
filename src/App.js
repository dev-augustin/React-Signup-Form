import React from 'react';
import './App.css';
import Form from "./components/Form";
//import UserInfo from "./components/UserInfo.js";

class App extends React.Component{
  render(){
   
    return (
      <div className="App">
      <h1>SignUp Form</h1>
      <div><Form/></div>
      
      </div>
    );
  }
}

export default App;
