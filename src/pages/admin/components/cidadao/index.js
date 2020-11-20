import React, { useState, useEffect } from 'react';

import { CidadaoService, UsuarioService } from '../../../../services';

export default function Cidadao(){
    const [cpfCidadao, setCpfCidadao] = useState('');
    const [codUsuario, setCodUsuario] = useState(undefined);
    const [usuarioList, setUsuarioList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await UsuarioService.getUsuarioList()
            setUsuarioList(data)
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor')
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { cpfCidadao, codUsuario };
            const res = await CidadaoService.createCidadao(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Cadastro de cidadão</h3>

            <div>
                <form className="form">
                    <div className="form__label">CPF:</div>
                    <input className="form__input" type="text" value={cpfCidadao} onChange={event => setCpfCidadao(event.target.value)}/>
                    
                    <div className="form__label">Usuário:</div>
                    <div className="form__select-content">
                        <select className="form__select" value={codUsuario} onChange={event => setCodUsuario(event.target.value)}>
                            <option defaultValue>Usuario</option>
                            {usuarioList.map(usuario => (
                                <option key={usuario.codUsuario} value={usuario.codUsuario}>{usuario.loginUsuario}</option>
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