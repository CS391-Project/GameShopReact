import React, { Component } from 'react';

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row,
} from 'reactstrap';

class Login extends Component {
  render() {
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
                id="exampleEmail"
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
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
		  <Row className='fullWidth'>
				<Col md="6">
				</Col>
				<Col md="6">
				</Col>
			</Row>
          <Button>Login</Button>
		  <Button>Create Account</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;