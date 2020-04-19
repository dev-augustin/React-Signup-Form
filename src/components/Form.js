//Create form  with inpit fileds Username, password, age, gender (male, female, or other options), and occupation.

import React, { Component } from 'react'
import UserInfo from './UserInfo';

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
            FormData:""

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
        console.log(this.state.UserName)
       let name = {name: this.state.UserName};

    alert(JSON.stringify(name));
    console.log("name", name);
    console.log(this.state);
    this.setState({FormData: <UserInfo 
        UserName={this.state.UserName}
       

        /> })
}
    render() {
        return (
           

                <form onSubmit={this.onSubmit} >
                   <label>
                       UserName
                       <input type="text" name="UserName" value={this.state.UserName} onChange={this.onChange}></input>
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="text" name="Password" value={this.state.Password} onChange={this.onChange} />
                    </label>
                    <br/>
                    <label>
                        Age
                        <input type="text" name="Age" onChange={this.onChange} />
                    </label>
                    <br/>
                    <label>
                        Gender
                        Male <input type="radio" name="Gender" onChange={this.onChange} />
                        female<input
                        type="radio" name="Gender"  onChange={this.onChange}/>
                        other<input
                        type="radio" name="Gender"  onChange={this.onChange}/>
                    </label>
                    <br/>
                    <label>
                        Occupation
                        <input type="text" name="Occupation" onChange={this.onChange}/>
                    </label>
                    <br/>
                    <label>
                        <input type="submit" value="Submit" />
                    </label>
                  
               </form> 
               
            
        )
    }
}
