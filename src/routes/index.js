import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthService } from '../services';
import { Welcome, Admin, Login } from '../pages';

export default function Routes(){

    useEffect(() => {
        
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}