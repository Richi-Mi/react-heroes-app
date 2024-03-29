import React, { useEffect, useReducer } from 'react';
import AuthContext from './auth/authContext';
import authReducer from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}
  
const HeroesApp = () => {
  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect( () => {
    if( !user ) return;

    localStorage.setItem('user', JSON.stringify( user ))
  }, [ user ]);
  
  const value = {
    user,
    dispatch
  }
  return (
    <AuthContext.Provider value={ value }>
      <AppRouter />
    </AuthContext.Provider>
  )
};

export default HeroesApp;
