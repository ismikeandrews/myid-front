import React, { useState, useEffect } from 'react';

import { ConsultorService, DocumentoService } from '../../../../services';

export default function ConsultorDocumento(){
    const [consultorList, setConsultorList] = useState([]);
    const [codConsultor, setCodConsultor] = useState(undefined);
    const [documentoList, setDocumentoList] = useState([]);
    const [codDocumento, setCodDocumento] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await ConsultorService.getConsultorList();
            setConsultorList(data);
            const res = await DocumentoService.getDocumentoList();
            setDocumentoList(res.data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');   
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { codConsultor, codDocumento };
            const res = await ConsultorService.createConsultorDocumento(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor'); 
        }
    };

    return (
        <div>
            <h3>Consultor Documento Component</h3>
            <div>
                <form>
                    <select value={codConsultor} onChange={event => setCodConsultor(event.target.value)}>
                        <option defaultValue>Consultores</option>
                        {consultorList.map(consultor => (
                            <option key={consultor.codConsultor} value={consultor.codConsultor}>{consultor.nomeConsultor}</option>
                        ))}
                    </select>
                    <br/>
                    <select value={codDocumento} onChange={event => setCodDocumento(event.target.value)}>
                        <option defaultValue>Documentos</option>
                        {documentoList.map(documento => (
                            <option key={documento.codDocumento} value={documento.codDocumento}>{documento.nomeDocumento}</option>
                        ))}
                    </select>
                    <br/>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};