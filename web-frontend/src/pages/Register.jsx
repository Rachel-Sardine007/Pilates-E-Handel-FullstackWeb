import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return ( 
    <div className='register'>
        <div className='register-header'>
            <h1>CREATE ACCOUNT</h1>
            <h3>Join our community</h3>
        </div>
        <div className='register-input'>
            <p>First Name</p>
            <input required type="text" />
            <p>Last Name</p>
            <input required type="text" />
            <p>Email</p>
            <input required type='text'/>
            <p>Password</p>
            <input required type='password' />
        </div>
        <button>Create Account</button>
        <p>Already have an account? Back to <Link to={'/login'}>Login</Link></p>
    </div> 
    );
}

export default Register;