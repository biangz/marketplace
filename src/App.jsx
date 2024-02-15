import React, { Fragment } from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import HeaderBg from '@/components/Layout/HeaderBg'
import Home from '@/views/Home/Home'
import Marketplace from '@/views/Marketplace/Marketplace'
import Token from '@/views/Token'
import Mint from '@/views/Mint'
import Explore from '@/views/Explore'
import Balance from '@/views/Balance'

import "./theme/prime.css";


function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Header />
                <HeaderBg />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/market" component={Marketplace} />
                    <Route path="/token" component={Token} />
                    <Route path="/mint" component={Mint} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/balance" component={Balance} />
                    <Route exact path="/" component={Home} />
                    <Redirect from='/*' to='/' />
                </Switch>
                <Footer/>
            </Fragment>
        </BrowserRouter>
    )
}

export default App
