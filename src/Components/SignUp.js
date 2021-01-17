import React, { Component } from 'react';
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row, InputGroup,
} from 'reactstrap';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      firstName: '',
      lastName: ''
    };



  }


  mySubmitHandler = (event) => {
    event.preventDefault();


    let email = this.state.email;
    let password = this.state.password;
    let rePassword = this.state.rePassword
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;

		if(!email.includes('@')){
			alert("Please enter a valid e-mail.")
		}
		else if(!email.includes("edu.tr") && !email.includes("email.com") && !email.includes("gmail.com")){
			alert("Please enter edu.tr, gmail.com or email.com")
		}
		else if(password.length < 6 || rePassword.length < 6) {
			alert("Password size shoul be at least 6.")
		}
		else if(!hasUpperCase(password) || !hasUpperCase(rePassword)) {
			alert("Passwords should include at least on upper case")
		}
	    else if(password !== rePassword){
			alert("Passwords do not match.")
    }
    else {

      var current_list = localStorage.getItem("user_list");

      if(current_list == null)
      {
        var user_list = [];
        user_list.push([email+ ";" + password + ";" + firstName + ";" + lastName]);
        localStorage.setItem("user_list", user_list);
      }

      else
      {
        var existing_list = current_list.split(",");
        var new_list = [];


        var isNew = 1;

        for(var i=0; i<existing_list.length; i++)
        {
          var temp_user = existing_list[i].split(";");
          new_list.push([existing_list[i]]);

          if(temp_user[0] === email) isNew = 0;

        }


        if(isNew)
        {
          new_list.push([email+ ";" + password + ";" + firstName + ";" + lastName]);
          localStorage.setItem("user_list", new_list);
        }

        else alert("This user already exists.");
      }

    }

  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>

      <h2>Register User</h2>

      <p>Email:</p>

      <input type='text' name='email' onChange={this.myChangeHandler} />
      
      <br/><br/>

      <p>Password</p>
      <input type='password' name='password' onChange={this.myChangeHandler} />

      <br/><br/>
      
      <p>Re-Password</p>
      <input type='password' name='rePassword' onChange={this.myChangeHandler} />


      <br/><br/>

      <p>First Name</p>
      <input type='text' name='firstName' onChange={this.myChangeHandler} />

      <br/><br/>

      <p>Last Name</p>
      <input type='text' name='lastName' onChange={this.myChangeHandler} />      

      <br/><br/>

      <input type='submit' />

      </form>
    );
  }
}

function hasUpperCase(str) {
  return str.match(/[A-Z]/);
}

export default SignUp