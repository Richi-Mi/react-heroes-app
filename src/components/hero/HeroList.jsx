import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import HeroCard from './HeroCard';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';

import './../../design/hero/HeroList.css'

const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => {
        return getHeroesByPublisher(publisher)
    }, [ publisher ]);

    return (
        <div className='card_heroes'>
            {
                heroes.map(hero => (
                    <HeroCard
                        key={ hero.id }
                        id={ hero.id }
                        superhero={ hero.superhero }
                        alter_ego={ hero.alter_ego }
                        publisher={ hero.publisher }
                    />
                ))
            }
            {/* ...hero */}
        </div>
    )
};

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}

export default HeroList;
