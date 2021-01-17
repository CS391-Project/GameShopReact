import React, { Component } from 'react';
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row,
} from 'reactstrap';


const SignUp = () => {
  const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);
    const productData = data.productList;

    const goToLoginPage = () => {
        goToPage('Login')
    }
	
	 const goToShopPage = () => {
        goToPage('')
    }
	
	const validatePassword = (pass1, pass2) => {
		if(pass1.length < 6 || pass2.length < 6) {
			alert("Password size shoul be at least 6.")
		}
	    else if(pass1 != pass2){
			alert("Passwords do not match.")
		} else {
			goToShopPage()
		}
    }
	
    return (
      <Container className="SignUp">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword1">Password</Label>
              <Input
                type="password"
                name="password1"
                id="examplePassword1"
                placeholder="********"
              />
            </FormGroup>
          </Col>
		  <Col>
            <FormGroup>
              <Label for="examplePassword2">Re-type Password</Label>
              <Input
                type="password"
                name="password2"
                id="examplePassword2"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Row className='fullWidth'>
				<Col md="6">
					<Button onClick={() => validatePassword(document.getElementById('examplePassword1').value, document.getElementById('examplePassword2').value)} className="mt-3 btn btn-info btn-product text-nowrap" >Sign Up</Button>
				</Col>
				<Col md="6">
					<Button onClick={() => goToLoginPage()} className="mt-3 btn btn-success btn-product text-nowrap">Login</Button>
				</Col>
			</Row>
        </Form>
      </Container>
    );
}

export default SignUp