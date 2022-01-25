import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './../../design/UI/nav.css';

// https://reactrouter.com/docs/en/v6

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/login', {
            replace: true // Argumento Replace
        })
    }
    const handleClassLink = ({ isActive }) => isActive ? 'nav_link active' : 'nav_link'
        
    return (
        <nav className='nav'>

            <div className="nav_options">
                <NavLink
                    className={ handleClassLink }
                    to="/"
                >
                    <i className="fas fa-home"></i>
                    Inicio
                </NavLink>
                <NavLink
                    className={ handleClassLink }
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    className={ handleClassLink }
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    className={ handleClassLink }
                    to="/search"
                >
                    Search
                    <i className="fas fa-search"></i>
                </NavLink>
            </div>
            <div className='nav_acount'>
                <span className='text_info acount_item'>
                    Ricardo
                </span>
                <button
                    onClick={ handleLogOut }
                    className="btn_logout acount_item"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
};

export default Navbar;
