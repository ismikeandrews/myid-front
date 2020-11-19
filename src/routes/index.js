import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Welcome, Admin } from '../pages';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/admin" component={Admin}/>
            </Switch>
        </BrowserRouter>
    );
}