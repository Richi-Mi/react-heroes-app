import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './../../design/hero/HeroCard.css'

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    publisher
}) => {
    const imgPath = `/assets/${id}.jpg`;
    
    return (
        <div className='card animate__animated animate__fadeIn'>
            <div className='card_img'>
                <img src={imgPath} alt={superhero} />
            </div>
            <h3 className={ (publisher === 'DC Comics') ? 'dc' : 'marvel'}> { superhero } </h3>
            <div className="card_info">
                <div className="card_text">
                    <p> { alter_ego } </p>
                    {/* {
                        (alter_ego !== characters) && <p className='txt_caracters'> {`${characters}`}  </p>
                    } */}
                </div>
                <div className="card_link">
                    <Link to={`/hero/${id}`} className='link'>
                        Mas <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
};

HeroCard.propTypes = {
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired
}

export default HeroCard;