import React from 'react';
import { useNavigate } from 'react-router-dom';

import './../../design/login.css'

const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', { 
            replace: true
        })
    }
    
    return (
        <div className='container_login'>
            <h1> Login Screen </h1>
            <hr />
            <button className='btn_login' onClick={ handleLogin }> Login </button>            
        </div>
    )
};

export default LoginScreen;
