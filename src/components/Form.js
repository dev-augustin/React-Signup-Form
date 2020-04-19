//Create form  with inpit fileds Username, password, age, gender (male, female, or other options), and occupation.

import React, { Component } from 'react';
import UserInfo from './UserInfo';
import '../App.css';

export default class Form extends Component {
    constructor(props){
        super(props);
        //creating state
        this.state={
            UserName: "",
            Password:"",
            Age: "",
            Gender:"",
            Occupation:"",
            FormData:[]

        }
        
        this.onChange=this.onChange.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
    }

   //new value for each input is passed to onChange function and using setState, the input is updated
    onChange(event){
        console.log("Onchange", event.target.value)
        this.setState({
          [event.target.name]:event.target.value
        });
    }
    

    onSubmit=(event) =>{
        event.preventDefault();
    //     console.log(this.state.UserName)
    //    let name = {name: this.state.UserName};

    // alert(JSON.stringify(name));
    // console.log("name", name);
    //passing data to another component
    this.setState({FormData: <UserInfo 
        UserName={this.state.UserName}
        Password={this.state.Password}
        Age={this.state.Age}
        Gender={this.state.Gender}
        Occupation={this.state.Occupation}
       

        /> })
    }
    render() {
        return (
           
<React.Fragment>
        <div className="form">
                <form onSubmit={this.onSubmit} >
                   <label>
                       UserName:  </label>
                       <input type="text" name="UserName" value={this.state.UserName} onChange={this.onChange}></input>            
                    <br/>
                    <label>
                        Password:  </label>
                        <input type="text" name="Password" value={this.state.Password} onChange={this.onChange} />          
                    <br/>
                    <label>
                        Age:  </label>
                        <input type="text" name="Age" onChange={this.onChange} />
                    <br/>
                    <label>
                        Gender:    </label>
                        Male <input type="radio" name="Gender" onChange={this.onChange} />
                        female<input
                        type="radio" name="Gender"  onChange={this.onChange}/>
                        other<input
                        type="radio" name="Gender"  onChange={this.onChange}/>
                    <br/>
                    <label>
                        Occupation    </label>
                        <input type="text" name="Occupation" onChange={this.onChange}/>
                    <br/>
                    <label>
                        <input type="submit" value="Submit" />
                    </label>   
                </form> 
              <div>{this.state.FormData}
              </div> 
        </div>     
            </React.Fragment>
        )
    }
}
