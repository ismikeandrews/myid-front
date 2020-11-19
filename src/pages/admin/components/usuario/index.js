import React, { useState, useEffect } from 'react';

import { UsuarioService } from '../../../../services';

export default function Usuario(){
    const [loginUsuario, setLoginUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [codTipoUsuario , setCodTipoUsuario] = useState(undefined);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [tipoUsuarioList, setTipoUsuarioList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try { 
            const { data } = await UsuarioService.getTipoUsuarioList();
            // setTipoUsuarioList(data);
        } catch (error) {
            console.log(error);
            // alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div>
            <h3>Usuario Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Usuario" value={loginUsuario} onChange={event => setLoginUsuario(event.target.value)}/>
                    <br/>
                    <input type="password" placeholder="Senha" value={senhaUsuario} onChange={event => setSenhaUsuario(event.target.value)}/>
                    <br/>
                    <input type="password" placeholder="Confirme a Senha" value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)}/>
                    <br/>
                    <select value={codTipoUsuario} onChange={event => setCodTipoUsuario(event.target.value)}>
                        <option selected>Tipo de usuario</option>
                        {tipoUsuarioList.map(tipoUsuario => (
                            <option key={tipoUsuario.codTipoUsuario} value={tipoUsuario.codTipoUsuario}>{tipoUsuario.nomeTipoUsuario}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};