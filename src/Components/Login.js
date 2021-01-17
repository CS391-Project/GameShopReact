import React, {useState} from 'react';
import * as functions from "../functions";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log(event)

        const loginResult = functions.loginUser(email, password);

        if (loginResult) {
            alert("Login successful. Redirecting to shop !");
            window.location.href = "/";
        } else {
            alert("Email or password is incorrect.");
        }
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="container pt-3">
                <h2 className='text-center'>Login</h2>

                <div className="row">
                    <div className="col-sm-12">
                        <label>Email</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Email" type='email' value={email} name='email'
                                   onChange={event => {
                                       setEmail(event.target.value);
                                   }}/>
                        </div>

                        <label>Password</label>
                        <div className="form-group pass_show">
                            <input required className="form-control" placeholder="Password" type='password' value={password}
                                   name='password' onChange={event => {
                                setPassword(event.target.value);
                            }}/>
                        </div>

                        <button type="submit" className="btn btn-block btn-success">Login</button>
                    </div>
                </div>
            </div>
        </form>
    );
}


export default Login