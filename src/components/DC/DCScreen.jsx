import React, { Fragment } from 'react';
import HeroList from '../hero/HeroList';

const DCScreen = () => {
  return (
        <Fragment>
            <h1> DC Heroes </h1>  
            <hr /> 
            <HeroList publisher='DC Comics'/>         
        </Fragment>
    )
};

export default DCScreen;
