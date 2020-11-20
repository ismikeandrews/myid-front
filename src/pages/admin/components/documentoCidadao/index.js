import React, { useState, useEffect } from 'react';

import { CidadaoService, DocumentoService } from '../../../../services';

export default function DocumentoCidadao(){  
    const [frenteDocumentoCidadao, setFrenteDocumentoCidadao] = useState('');
    const [versoDocumentoCidadao, setVersoDocumentoCidadao] = useState('');
    const [cidadaoList, setCidadaoList] = useState([]);
    const [codCidadao, setCodCidadao] = useState(undefined);
    const [documentoList, setDocumentoList] = useState([]);
    const [codDocumento, setCodDocumento] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await CidadaoService.getCidadaoList();
            const res = await DocumentoService.getDocumentoList();
            setCidadaoList(data);
            setDocumentoList(res.data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { frenteDocumentoCidadao, versoDocumentoCidadao, codCidadao, codDocumento };
            const res = await CidadaoService.createCidadaoDocumento(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Documento Cidadao Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Frente Documento:</div>
                        <input className="form__input" type="text" value={frenteDocumentoCidadao} onChange={event => setFrenteDocumentoCidadao(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Verso Documento:</div>
                        <input className="form__input" type="text" value={versoDocumentoCidadao} onChange={event => setVersoDocumentoCidadao(event.target.value)}/>
                    </div>
                    
                    <div className="form__select-content">
                        <div className="form__label">Documento:</div>
                        <select className="form__select" value={codDocumento} onChange={event => setCodDocumento(event.target.value)}>
                            <option defaultValue>Documento</option>
                            {documentoList.map(documento => (
                                <option key={documento.codDocumento} value={documento.codDocumento}>{documento.nomeDocumento}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form__select-content">
                        <div className="form__label">Cidadao:</div>
                        <select className="form__select" value={codCidadao} onChange={event => setCodCidadao(event.target.value)}>
                            <option>Cidadao</option>
                            {cidadaoList.map(cidadao => (
                                <option key={cidadao.codCidadao} value={cidadao.codCidadao}>{cidadao.cpfCidadao}</option>
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