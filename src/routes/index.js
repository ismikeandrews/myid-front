import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthService } from '../services';
import { Welcome, Admin, Login } from '../pages';

export default function Routes(){
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        const data = AuthService.getAuthData()
        data && setIsLogged(true)
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome}/>
                
                {isLogged ? 
                    <Route path="/admin" component={Admin}/>
                    :
                    <Route path="/Login" component={Login}/>
                }
            </Switch>
        </BrowserRouter>
    );
}