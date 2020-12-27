import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/Homepage.component';
import ShopPage from "./pages/shop/shop.component";
import HeaderComponent from "./components/header/Header.component";



function App() {
    return (
        <div>

            <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;

