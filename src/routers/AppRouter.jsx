import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes'
// import HeroesApp from '../HeroesApp';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } />

                <Route path='/*' element = { 
                    <PrivateRoutes>
                        <DashBoardRoutes />
                    </PrivateRoutes>
                } />
                {/* <Route path='/*' element = { <DashBoardRoutes /> } /> */}
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
