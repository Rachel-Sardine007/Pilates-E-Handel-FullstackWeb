import React, {useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { registerUser } from "../api.js";
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ... formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await registerUser(formData);
            navigate('/login');
        }catch(error){
            setError("Something went wrong. Please try again!");
        }
    }


    return ( 
    <div className='register'>
        <div className='register-container'>
            <div className='register-header'>
                <h1>CREATE ACCOUNT</h1>
                <h3>Join our community</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='register-input'>
                    <p>Username</p>
                    <input 
                        required 
                        type="text" 
                        name='username'
                        value={formData.username}
                        onChange={handleChange}/>
                    <p>Email</p>
                    <input 
                        required 
                        type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}/>
                    <p>Password</p>
                    <input 
                        required 
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange} />
                </div>
                {error && <p className='error'>{error}</p>}
                <button type='submit' className='auth-btn'>Create Account</button>
            </form>


            <p>Already have an account? Back to <Link to={'/login'}><u>Login</u></Link></p>
        </div>
    </div> 
    );
}

export default Register;