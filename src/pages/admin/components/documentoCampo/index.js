import React, { useState, useEffect } from 'react';

import { DocumentoService } from '../../../../services';

export default function DocumentoCampo(){
    const [nomeCampo, setNomeCampo] = useState('');
    const [tipoCampo, setTipoCampo] = useState('');
    const [documentoList, setDocumentoList] = useState([]);
    const [codDocumento, setCodDocumento] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await DocumentoService.getDocumentoList();
            setDocumentoList(data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { nomeCampo, tipoCampo, codDocumento};
            const res = await DocumentoService.createDocumentoCampo(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Documento Campo Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Nome do campo:</div>
                        <input className="form__input" type="text" value={nomeCampo} onChange={event => setNomeCampo(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Tipo do campo:</div>
                        <input className="form__input" type="text" value={tipoCampo} onChange={event => setTipoCampo(event.target.value)}/>
                    </div>
                    
                    <div className="form__select-content">
                        <div className="form__label">Documento:</div>
                        <select className="form__select" value={codDocumento} onChange={event => setCodDocumento(event.target.value)}>
                            <option>Documento</option>
                            {documentoList.map(documento => (
                                <option key={documento.codDocumento} value={documento.codDocumento}>{documento.nomeDocumento}</option>
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