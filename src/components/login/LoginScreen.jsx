import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/authContext';
import useForm from '../../hooks/useForm';
import types from '../../types/types';

import './../../design/login.css'
import './../../design/search.css'

const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext );
    const [ values, handleInputChange, reset ] = useForm({
        username: ''
    });
    const { username } = values 

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        const action = {
            type: types.login,
            payload: {
                name: username
            }
        }
        dispatch( action );

        reset()

        navigate( lastPath, { 
            replace: true
        });
    }
    
    return (
        <div className='container_login'>
            <h1> Login Screen </h1>
            <hr />
            <div className="form_search">
                <input 
                    type='text'
                    className='form_input'
                    placeholder='Your Name'
                    name='username'
                    autoComplete='off'
                    value={ username }
                    onChange={ handleInputChange }
                />
                <button className='btn_search btn_login' onClick={ handleLogin }> Login </button>   
            </div>         
        </div>
    )
};

export default LoginScreen;
