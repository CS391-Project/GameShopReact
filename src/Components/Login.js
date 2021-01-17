import React, { Component } from 'react';
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row,
} from 'reactstrap';


const Login = () => {
	const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);

    const goToSignupPage = () => {
        goToPage('SignUp')
    }
	
	 const goToShopPage = (mail, pass) => {
		
		if(!functions.checkLogin(mail, pass)) {
			alert("E-mail and password do not match.")			
		} else {
			goToPage('')			
		}
    }
	
    return (
      <Container className="Login">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail1"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword1"
                placeholder="********"
              />
            </FormGroup>
          </Col>
		  <Row className='fullWidth'>
				<Col md="6">
					<Button onClick={() => goToShopPage(document.getElementById('exampleEmail1').value, document.getElementById('examplePassword1').value)} className="mt-3 btn btn-info btn-product text-nowrap" >Login</Button>
				</Col>
				<Col md="6">
					<Button onClick={() => goToSignupPage()} className="mt-3 btn btn-success btn-product text-nowrap">Sign up </Button>
				</Col>
			</Row>
        </Form>
      </Container>
    );
}

export default Login