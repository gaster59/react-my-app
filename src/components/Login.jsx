import React, { useState } from "react";
import { useForm } from "react-hook-form"
import Cookies from "js-cookie";

import {
    Link
} from "react-router-dom";

function Login(props) {

    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState('');

    const linkApiLogin = 'https://tuan-anh.top/api/login';

    const handleLogin = data => {
        // console.log(data);
        // let email = data.email;
        // let password = data.password;
        setMessage('wating');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(linkApiLogin, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (!result.success) {
                    setMessage('error');
                } else {
                    Cookies.set('login', result.token);
                    props.history.push("/dashboard");
                }
            });
    }

    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit(handleLogin)}>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp" name="email" ref={register}
                                                    placeholder="Enter Email Address..." />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                    name="password" ref={register}
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>

                                            {message === 'wating' && <div className="d-flex justify-content-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>}

                                            {message === 'error' && <div className="alert alert-danger mt-1 btn-user">Can not login, please try again</div>}

                                            <hr />
                                            <Link to="index.html" className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </Link>
                                            <Link to="index.html" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </Link>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="forgot-password.html">Forgot Password?</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="register.html">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;