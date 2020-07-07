/* build the login page here */
import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = props => {
    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    });

    const { push } = useHistory();

    const onChangeHandler = e => {
        return setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    console.log("credentials",credentials)

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/auth/login', credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                push("/stories");
                console.log("login worked", res)
            })
            .catch(err => console.log("Login Error", err, credentials));
    };



    return (
            <div className="LoginPage">
                <h2>Welcome to the Expat Journal</h2>
                <form onSubmit={handleSubmit}>
                    <input name="username" placeholder="username" onChange={onChangeHandler} />
                    <input type="password" name="password" placeholder="password" onChange={onChangeHandler} />
                    <button>login</button>
                </form>

                <div>
                    <h2>New User?</h2>
                    <h2>Register Here...    </h2>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
           
    );
};

export default Login;