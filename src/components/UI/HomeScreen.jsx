import React from 'react';
import { Link } from 'react-router-dom';

import './../../design/UI/HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className='content_home animate__animated animate__fadeIn'>

            <h2 className='title_home'> Heroes App </h2>
            <h3 className='subtitle_home'> A list Heroes of Comics </h3>

            <div className="gif_home">
                <img src='/banner_code.jpg' alt='heroes'/>
            </div>
            <div className="btns">
                <Link to={`/marvel`} className='link_more'>
                    Marvel Heroes
                </Link>
                <Link to={`/dc`} className='link_more'>
                    DC Heroes
                </Link>
            </div>
        </div>
    )
};

export default HomeScreen;
