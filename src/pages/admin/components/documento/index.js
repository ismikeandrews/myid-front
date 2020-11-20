import React, { useState, useEffect } from 'react';

import { OrgaoEmissorService, DocumentoService } from '../../../../services';

export default function Documento(){
    const [nomeDocumento, setNomeDocumento] = useState('');
    const [imagemDocumento, setImagemDocumento] = useState('');
    const [codOrgaoEmissor, setCodOrgaoEmissor] = useState(undefined);
    const [orgaoEmissorList, setOrgaoEmissorList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await OrgaoEmissorService.getOrgaoEmissorList();
            setOrgaoEmissorList(data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { nomeDocumento, imagemDocumento, codOrgaoEmissor};
            const res = await DocumentoService.createDocumento(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div>
            <h3>Documento Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome do documento" value={nomeDocumento} onChange={event => setNomeDocumento(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Imagem do documento" value={imagemDocumento} onChange={event => setImagemDocumento(event.target.value)}/>
                    <br/>
                    <select value={codOrgaoEmissor} onChange={event => setCodOrgaoEmissor(event.target.value)}>
                        <option defaultValue>Orgão emissor</option>
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