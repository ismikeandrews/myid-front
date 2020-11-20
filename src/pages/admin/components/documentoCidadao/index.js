import React, { useState, useEffect } from 'react';

import { CidadaoService, DocumentoService} from '../../../../services';

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
            // alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return(
        <div>
            <h3>Documento Cidadao Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Frente Documento" value={frenteDocumentoCidadao} onChange={event => setFrenteDocumentoCidadao(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Verso Documento" value={versoDocumentoCidadao} onChange={event => setVersoDocumentoCidadao(event.target.value)}/>
                    <br/>
                    <select value={codDocumento} onChange={event => setCodDocumento(event.target.value)}>
                        <option defaultValue>Documento</option>
                        {documentoList.map(documento => (
                            <option key={documento.codDocumento} value={documento.codDocumento}>{documento.nomeDocumento}</option>
                        ))}
                    </select>
                    <br/>
                    <select value={codCidadao} onChange={event => setCodCidadao(event.target.value)}>
                        <option>Cidadao</option>
                        {cidadaoList.map(cidadao => (
                            <option key={cidadao.codCidadao} value={cidadao.codCidadao}>{cidadao.cpfCidadao}</option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
};