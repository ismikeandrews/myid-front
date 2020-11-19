import React, { useState, useEffect } from 'react';

import { OrgaoEmissorService } from '../../../../services';

export default function Documento(){
    const [nomeDocumento, setNomeDocumento] = useState('');
    const [imagemDocumento, setImagemDocumento] = useState('');
    const [codOrgaoEmissior, setCodOrgaoEmissor] = useState(undefined);
    const [orgaoEmissorList, setOrgaoEmissorList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await OrgaoEmissorService.getOrgaoEmissorList();
            // setOrgaoEmissorList(data);
        } catch (error) {
            console.log(error);
            // alert('Ocorreu um erro durante a comunicação com o servidor');
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
                    <select value={codOrgaoEmissior} onChange={event => setCodOrgaoEmissor(event.target.value)}>
                        <option selected>Orgão emissor</option>
                        {orgaoEmissorList.map(orgaoEmissor => (
                            <option key={orgaoEmissor.codOrgaoEmissior} value={orgaoEmissor.codOrgaoEmissior}>{orgaoEmissor.siglaOrgaoEmissor}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};