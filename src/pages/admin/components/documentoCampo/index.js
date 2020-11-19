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
            // alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return(
        <div>
            <h3>Documento Campo Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome do campo" value={nomeCampo} onChange={event => setNomeCampo(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Tipo do campo" value={tipoCampo} onChange={event => setTipoCampo(event.target.value)}/>
                    <br/>
                    <select value={codDocumento} onChange={event => setCodDocumento(event.target.value)}>
                        <option>Documento</option>
                        {documentoList.map(documento => (
                            <option key={documento.codDocumento} value={documento.codDocumento}>{documento.nomeDocumento}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};