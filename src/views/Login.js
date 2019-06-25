import React from 'react';
import Auth from '../components/Auth';

const Login = props => {
    return (
        <div>
            <h1>Please Login To Continue</h1>
            <button onClick={() => Auth.login()}>Log In</button>
        </div>
    );
};

export default Login;
