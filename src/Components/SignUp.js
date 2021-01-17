import React, {Component, useState} from 'react';
import data from "../Data/data.json";
import {useHistory} from "react-router-dom";
import * as functions from "../functions";

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Row, InputGroup,
} from 'reactstrap';
import Item from "./Item";

const SignUp = () => {
    const history = useHistory();
    const goToPage = (pageName) => history.push(pageName);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!functions.validateEmail(email)) {
            alert("Please enter a valid e-mail.")
        } else if (password.length < 6) {
            alert("Password size should be at least 6.")
        } else if (password !== rePassword) {
            alert("Passwords do not match.")
        } else if (!functions.hasUpperCase(password) || !functions.hasUpperCase(rePassword)) {
            alert("Passwords should include at least one upper case alphabeth character.")
        } else if (!firstName) {
            alert("First name cannot be empty !")
        } else if (!lastName) {
            alert("Last name cannot be empty !")
        } else {
            const success = functions.registerUser(email, password, firstName, lastName);

            if (success) {
                alert("Successfully registered and logged in ! Redirecting you to the shop page...");

                const loginResult = functions.loginUser(email, password);

                if (loginResult) {
                    goToPage('/')
                } else {
                    alert('Autologin failed !')
                }
            } else {
                alert("A user with this email already exists. Please choose a different email.");
            }
        }
    }

    return (

        <form onSubmit={formSubmitHandler}>
            <div className="container pt-3">
                <h2 className='text-center'>Register</h2>

                <div className="row">
                    <div className="col-sm-12">
                        <label>Email</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Email" type='email' value={email} name='email' onChange={event => {
                                setEmail(event.target.value);
                            }}/>
                        </div>

                        <label>Password</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Password" type='password' value={password} name='password' onChange={event => {
                                setPassword(event.target.value);
                            }}/>
                        </div>

                        <label>Re-enter Password</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Password" type='password' value={rePassword} name='repassword' onChange={event => {
                                setRePassword(event.target.value);
                            }}/>
                        </div>

                        <label>First Name</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="First Name" type='name' value={firstName} name='firstname' onChange={event => {
                                setFirstName(event.target.value);
                            }}/>
                        </div>

                        <label>Last Name</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Last Name" type='name' value={lastName} name='lastname' onChange={event => {
                                setLastName(event.target.value);
                            }}/>
                        </div>

                        <button type="submit" className="btn btn-block btn-success">Register</button>
                    </div>
                </div>
            </div>



        </form>
    );
}




export default SignUp



