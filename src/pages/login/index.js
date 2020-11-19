import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthService } from '../../services'

export default function Login(){

    const [loginUsuario, setLoginUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const handleLogin = () => {
        const credentials = { loginUsuario, senhaUsuario }
        AuthService.storeAuthData(credentials)
    }

    return(
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <div>
                <input type="text" placeholder="Usuario" value={loginUsuario} onChange={event => setLoginUsuario(event.target.value)}/>
                <br/>
                <input type="password" placeholder="Senha" value={senhaUsuario} onChange={event => setSenhaUsuario(event.target.value)}/>
                <br/>
                <button onClick={() => handleLogin()}>Entrar</button>
            </div>
        </div>
    );
}