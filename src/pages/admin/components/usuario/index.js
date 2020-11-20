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
            setTipoUsuarioList(data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = {loginUsuario, senhaUsuario, codTipoUsuario};
            const res = await UsuarioService.createUsuario(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Usuario Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Usuario:</div>
                        <input className="form__input" type="text" value={loginUsuario} onChange={event => setLoginUsuario(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Senha:</div>
                        <input className="form__input" type="password" value={senhaUsuario} onChange={event => setSenhaUsuario(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Confirme a Senha:</div>
                        <input className="form__input" type="password" value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)}/>
                    </div>
                    
                    <div className="form__label">Tipo de usuário:</div>
                    <div className="form__select-content">
                        <select className="form__select" value={codTipoUsuario} onChange={event => setCodTipoUsuario(event.target.value)}>
                            <option defaultValue>Tipo de usuário</option>
                            {tipoUsuarioList.map(tipoUsuario => (
                                <option key={tipoUsuario.codTipoUsuario} value={tipoUsuario.codTipoUsuario}>{tipoUsuario.nomeTipoUsuario}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form__button-content">
                        <button className="button form__button" onClick={handleSubmit}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};