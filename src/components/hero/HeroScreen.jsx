import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import getHeroById from '../../selectors/getHeroById';

import './../../design/hero/HeroScreen.css';

const Hero = () => {
    const { heroeID } = useParams();
    const navigate = useNavigate();

    const heroe = useMemo( () => {
        return getHeroById( heroeID );
    }, [ heroeID ]);
    // La función solo se ejecutara si el valor heroeID cambia 

    if( !heroe ) {
        return <Navigate to='/' />
    }
    const { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters 
    } = heroe
    
    const imagePath = `/assets/${id}.jpg`;

    const handleReturn = () => {
        // if( publisher === 'DC Comics' ) {
        //     navigate('/dc')
        // }
        // if( publisher === 'Marvel Comics' ) {
        //     navigate('/marvel')
        // }
        navigate( -1 );
    }

    return (
        <div className='container'>
            <div className='hero_content'>
                <div className="hero_image">
                    <img src={ imagePath } alt={ superhero } className='animate__animated animate__fadeInLeft'/>
                </div>
                <div className="hero_info animate__animated animate__fadeIn">
                    <h3 className='hero_title'> { superhero } </h3>
                    <h4> Important Information </h4>
                    <hr />
                    <ul typeof='disc'>
                        <li> <b> Publisher: </b> { publisher } </li>
                        <li> <b> Alter_ego: </b> { alter_ego } </li>
                        <li> <b> First_appearance: </b> { first_appearance } </li>
                    </ul>

                    <hr />
                    
                    <h4> <b> Characters: </b> { characters } </h4>
                    
                    <hr />
                    <div className="section_btn">
                        <button className='btn_return' onClick={ handleReturn }> Return </button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;
