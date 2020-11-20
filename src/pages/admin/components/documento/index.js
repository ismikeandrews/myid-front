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
        <div className="admin__item">
            <h3 className="title">Documento Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Nome do documento:</div>
                        <input className="form__input" type="text" value={nomeDocumento} onChange={event => setNomeDocumento(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Imagem do documento:</div>
                        <input className="form__input" type="text" value={imagemDocumento} onChange={event => setImagemDocumento(event.target.value)}/>
                    </div>
                    
                    <div className="form__select-content">
                        <div className="form__label">Orgão emissor:</div>
                        <select className="form__select" value={codOrgaoEmissor} onChange={event => setCodOrgaoEmissor(event.target.value)}>
                            <option defaultValue>Orgão emissor</option>
                            {orgaoEmissorList.map(orgaoEmissor => (
                                <option key={orgaoEmissor.codOrgaoEmissor} value={orgaoEmissor.codOrgaoEmissor}>{orgaoEmissor.siglaOrgaoEmissor}</option>
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