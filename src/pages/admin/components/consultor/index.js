import React, { useState, useEffect } from 'react';

import { ConsultorService } from '../../../../services';

export default function Consultor(){
    const [nomeConsultor, setNomeConsultor] = useState('');
    const [cnpjConsultor, setCnpjConsultor] = useState('');
    const [tipoConsultorList, setTipoConsultorList] = useState([]);
    const [codTipoConsultor, setCodTipoConsultor] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await ConsultorService.getTipoConsultorList();
            setTipoConsultorList(data);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = { nomeConsultor, cnpjConsultor, codTipoConsultor };
            const res = await ConsultorService.createConsultor(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Consultor Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Nome do consultor:</div>
                        <input className="form__input" type="text" value={nomeConsultor} onChange={event => setNomeConsultor(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">CNPJ:</div>
                        <input className="form__input" type="text" value={cnpjConsultor} onChange={event => setCnpjConsultor(event.target.value)}/>
                    </div>

                    <div className="form__label">Usuário:</div>
                    <div className="form__select-content">
                        <select className="form__select" value={codTipoConsultor} onChange={event => setCodTipoConsultor(event.target.value)}>
                            <option defaultValue>Tipo consultor</option>
                            {tipoConsultorList.map(tipoConsultor => (
                                <option key={tipoConsultor.codTipoConsultor} value={tipoConsultor.codTipoConsultor}>{tipoConsultor.nomeTipoConsultor}</option>
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