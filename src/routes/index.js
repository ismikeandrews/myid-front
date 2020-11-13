import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Welcome } from '../pages';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome}/>
            </Switch>
        </BrowserRouter>
    );
}