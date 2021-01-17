import React, { Component } from 'react';
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row, InputGroup,
} from 'reactstrap';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

  }


  mySubmitHandler = (event) => {
    event.preventDefault();


    let email = this.state.email;
    let password = this.state.password;

    var current_list = localStorage.getItem("user_list");

    if(current_list == null)
    {
      alert("Please Register.");
    }

    else
    {
      var existing_list = current_list.split(",");
      var new_list = [];

      var isMatced = 0;

      for(var i=0; i<existing_list.length; i++)
      {
        var temp_user = existing_list[i].split(";");
        new_list.push([existing_list[i]]);

        if(temp_user[0] === email && temp_user[1] === password  ) isMatced = 1;

      }

      if(isMatced)
      {
        alert("Login Successful.");
      }
      else
      {
        alert("Email or password is incorrect.");
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

      <h2>Log In</h2>

      <p>Email:</p>

      <input type='text' name='email' onChange={this.myChangeHandler} />
      
      <br/><br/>

      <p>Password</p>
      <input type='password' name='password' onChange={this.myChangeHandler} />

      <br/><br/>

      <input type='submit' value="Login" />

      </form>
    );
  }
}

function hasUpperCase(str) {
  return str.match(/[A-Z]/);
}

export default Login