import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api.js';
import { useAuth } from '../contexts/AuthContext.jsx';
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ... formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("handleSubmit fired");
        try{
            console.log("formData:", formData); // debug
            
            const response = await loginUser(formData);

            //debug
            console.log("Login response:", response);

            login(response.accessToken, {
                username: response.username,
                email: response.email,
            });
            navigate('/');
        }catch(error){
            // debug
            console.log("Full error:", error);

            setError('Wrong email or password');
        }
    }

    return ( 
    <div className='login'>
        <div className='login-container'>
            <div className='login-header'>
                <h1>LOGIN</h1>
                <h3>Welcome!</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='login-input'>
                        <p>Email</p>
                        <input 
                            required type="email" name='email'
                            value={formData.email}
                            onChange={handleChange}/>
                        <p>Password</p>
                        <input 
                            required type="password" name='password'
                            value={formData.password}
                            onChange={handleChange}/>
                        <p><u>Forgot password?</u></p>
                    </div>
                    {error && <p className='error'>{error}</p>}
                <button type='button' onClick={handleSubmit} className='auth-btn'>Login</button>
                
            </form>
            <p>Don't have an account yet? <Link to={'/register'}><u>Register</u></Link> here</p>
        </div>
    </div> 
    );
}

export default Login;