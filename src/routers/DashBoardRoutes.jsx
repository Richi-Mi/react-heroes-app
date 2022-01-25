import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/UI/Navbar';
import MarvelScreen from '../components/Marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import DCScreen from '../components/DC/DCScreen';
import Error404 from '../components/UI/Error404';
import Hero from '../components/hero/HeroScreen';
import HomeScreen from '../components/UI/HomeScreen';

const DashBoardRoutes = () => {
    return < >
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='marvel' element={ <MarvelScreen /> } />
                <Route path='dc' element={ <DCScreen />} />
                <Route path='search' element={ <SearchScreen /> } />
                <Route path='hero/:heroeID' element={ <Hero /> } />

                <Route path='/' element={ <HomeScreen />} />
                <Route path='*' element={ <Error404 />} />
            </Routes>
        </div>
    </ >;
};

export default DashBoardRoutes;
