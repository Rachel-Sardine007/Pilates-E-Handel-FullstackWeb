import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return ( 
    <div className='login'>
        <div className='login-header'>
            <h1>LOGIN</h1>
            <h3>Welcome!</h3>
        </div>
        <div className='login-input'>
            <p>Email</p>
            <input required type="text"/>
            <p>Password</p>
            <input required type="password"/>
            <p>Forgot password?</p>
        </div>
        <button>Login</button>
        <p>Don't have an account yet? <Link to={'/Register'}>Register</Link> here</p>
    </div> 
    );
}

export default Login;