import React, { Fragment, useMemo } from 'react';
import queryString from 'query-string';

// modulo query-string

import useForm from '../../hooks/useForm';
import '../../design/search.css';
import getHeroesByName from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { search = '' } = queryString.parse( location.search );
    

    const [ formValues, handleInputSearch ] = useForm({
        searchText: search
    });

    const { searchText } = formValues
    let heroesFiltered = useMemo( () => {
        return getHeroesByName( search )
    }, [ search ]);
    
    const handleSubmit = ( ev ) => {
        ev.preventDefault();
        navigate(`?search=${ searchText }`)
    }
    
    return (
        <Fragment>
            <h1> Busquedas </h1>
            <hr />

            <form className="form_search" action='submit' onSubmit={ handleSubmit }>
                <div className="form_section">
                    <input
                        type="text"
                        placeholder='Buscar un Heroe'
                        className='form_input'
                        name='searchText'
                        autoComplete='off'
                        value={ searchText }
                        onChange={ handleInputSearch }
                    />
                </div>
                <div className="form_section_btn">
                    <button type='submit' className='btn_search'>
                        Search
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>

            <hr />

            <div className="results">
                <div>
                    <h3 className='title_results'> Resultados: </h3>
                    {
                        ( search === '' ) 
                            ? <p className='alert_info'> Busca un Heroe </p>
                            : ( heroesFiltered.length === 0 ) && <p className='alert_danger'> No hay resultados para: { search } </p>
                    }
                </div>
                <div className="cards_results">
                    {
                        heroesFiltered.map( hero => {
                            return <HeroCard key={ hero.id } {...hero} />
                        })
                    }
                </div>
            </div>

        </Fragment>
    )
};

export default SearchScreen;
