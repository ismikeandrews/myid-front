import React, { useState, useEffect } from 'react';

import { DocumentoService } from '../../../../services';

export default function DocumentoCampoOpcao(){
    const [nomeOpcao, setNomeOpcao] = useState('');
    const [valorOpcao, setValorOpcao] = useState('');
    const [documentoCampoList, setDocumentoCampoList] = useState([]);
    const [codDocumentoCampo, setCodDocumentoCampo] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await DocumentoService.getDocumentoCampoList();
            // setDocumentoCampoList(data);
        } catch (error) {
            console.log(error);
            // alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return(
        <div>
            <h3>Documento Campo Opção Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome Opção" value={nomeOpcao} onChange={event => setNomeOpcao(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Valor Opção" value={valorOpcao} onChange={event => setValorOpcao(event.target.value)}/>
                    <br/>
                    <select value={codDocumentoCampo} onChange={event => setCodDocumentoCampo(event.target.value)}>
                        <option>Campo Documento</option>
                        {documentoCampoList.map(documentoCampo => (
                            <option key={documentoCampo.codDocumentoCampo} value={documentoCampo.codDocumentoCampo}>{documentoCampo.nomeCampo}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};