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
        event.preventDefault()
        try {
            const data = { cpfCidadao, codUsuario }
            const res = await CidadaoService.createCidadao(data)
            console.log(res)
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    }

    return (
        <div>
            <h3>Cidadao Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="CPF" value={cpfCidadao} onChange={event => setCpfCidadao(event.target.value)}/>
                    <br/>
                    <select value={codUsuario} onChange={event => setCodUsuario(event.target.value)}>
                        <option defaultValue>Usuario</option>
                        {usuarioList.map(usuario => (
                            <option key={usuario.codUsuario} value={usuario.codUsuario}>{usuario.loginUsuario}</option>
                        ))}
                    </select>
                    <br/>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};