import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthService } from '../../services'

export default function Login(){

    const [loginUsuario, setLoginUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [redirectTo, setRedirectTo] = useState(null);
    const handleLogin = () => {
        const credentials = { loginUsuario, senhaUsuario }
        console.log(credentials)
        const isLogged = AuthService.storeAuthData(credentials)
        isLogged && setRedirectTo('/admin')
    }

    redirectTo && <Redirect to={redirectTo}/>

    return(
        <div className="login">
            <div className="login__effects-top">
            </div>

            <div className="login__content">
                <div className="login__title">
                    <h1>Login Page</h1>
                </div>
                <div className="login__form">
                    <div className="login__label">Usuário:</div>
                    <input className="login__input" type="text" placeholder="Usuario" value={loginUsuario} onChange={event => setLoginUsuario(event.target.value)}/>

                    <div className="login__label">Senha:</div>
                    <input className="login__input" type="password" placeholder="Senha" value={senhaUsuario} onChange={event => setSenhaUsuario(event.target.value)}/>

                    <button className="button login__button" onClick={() => handleLogin()}>Entrar</button>
                </div>
            </div>

            <div className="login__effects-bottom">
            </div>
        </div>
    );
}