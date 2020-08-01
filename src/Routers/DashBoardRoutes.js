import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { HeroPage } from '../components/heroes/HeroPage';
import { DcPage } from '../components/dc/DcPage';
import { SearchPage } from '../components/search/SearchPage';

export const DashBoardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className='container mt-2'>    
                <Switch>
                    <Route exact path='/marvel' component = { MarvelPage }/>
                    <Route exact path='/hero/:heroId' component = { HeroPage }/>
                    <Route exact path='/dc' component={ DcPage }/>
                    <Route exact path='/search' component={ SearchPage }/>
                    <Redirect to='/marvel' />
                </Switch>
            </div>   
        </>
    )
}
