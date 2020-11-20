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
            setDocumentoCampoList(data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = {nomeOpcao, valorOpcao, codDocumentoCampo};
            const res = await DocumentoService.createDocumentoCampoOpcao(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Documento Campo Opção Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Nome opção:</div>
                        <input className="form__input" type="text" value={nomeOpcao} onChange={event => setNomeOpcao(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Valor opção:</div>
                        <input className="form__input" type="text" value={valorOpcao} onChange={event => setValorOpcao(event.target.value)}/>
                    </div>
                    
                    <div className="form__select-content">
                        <div className="form__label">Documento:</div>
                        <select className="form__select" value={codDocumentoCampo} onChange={event => setCodDocumentoCampo(event.target.value)}>
                            <option>Campo Documento</option>
                            {documentoCampoList.map(documentoCampo => (
                                <option key={documentoCampo.codDocumentoCampo} value={documentoCampo.codDocumentoCampo}>{documentoCampo.nomeCampo}</option>
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