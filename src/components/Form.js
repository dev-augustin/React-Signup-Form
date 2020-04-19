//Create form  with inpit fileds Username, password, age, gender (male, female, or other options), and occupation.

import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        //creating state
        this.state={
            UserName: "",
            Password:"",
            Age: "",
            Gender:"",
            Occupation:""
        }
    }
    render() {
        return (
           

                <form>
                   <label>
                       UserName
                       <input type="text" name="UserName"></input>
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="text" name="Password" />
                    </label>
                    <br/>
                    <label>
                        Age
                        <input type="text" name="Age" />
                    </label>
                    <br/>
                    <label>
                        Gender
                        Male <input type="radio" name="Gender" />
                        female<input
                        type="radio" name="Gender" />
                        other<input
                        type="radio" name="Gender" />
                    </label>
                    <br/>
                    <label>
                        Occupation
                        <input type="text" name="Occupation" />
                    </label>
                  
               </form> 
               
            
        )
    }
}
