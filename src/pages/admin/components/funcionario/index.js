import React, { useState, useEffect } from 'react';

import { UsuarioService, OrgaoEmissorService, } from '../../../../services';

export default function Funcionario(){
    const [usuarioList, setUsuarioList] = useState([]);
    const [codUsuario, setCodUsuario] = useState(undefined);
    const [orgaoEmissorList, setOrgaoEmissorList] = useState([]);
    const [codOrgaoEmissor, setCodEmissor] = useState(undefined);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await UsuarioService.getUsuarioList();
            setUsuarioList(data);
            const res = await OrgaoEmissorService.getOrgaoEmissorList();
            setOrgaoEmissorList(res.data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = {codUsuario, codOrgaoEmissor};
            const res = await OrgaoEmissorService.createFuncionario(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div>
            <h3>Funcionario Component</h3>
            <hr/>
            <div>
                <form>
                    <select value={codUsuario} onChange={event => setCodUsuario(event.target.value)}>
                        <option defaultValue>Usuario</option>
                        {usuarioList.map(usuario => (
                            <option key={usuario.codUsuario} value={usuario.codUsuario}>{usuario.loginUsuario}</option>
                        ))}
                    </select>
                    <br/>
                    <select value={codOrgaoEmissor} onChange={event => setCodEmissor(event.target.value)}>
                        <option defaultValue>Orgão Emissor</option>
                        {orgaoEmissorList.map(orgaoEmissor => (
                            <option key={orgaoEmissor.codOrgaoEmissor} value={orgaoEmissor.codOrgaoEmissor}>{orgaoEmissor.siglaOrgaoEmissor}</option>
                        ))}
                    </select>
                    <br/>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};
