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
            // setTipoConsultorList(data);
        } catch (error) {
            console.log(error);
            // alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div>
            <h3>Consultor Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome do consultor" value={nomeConsultor} onChange={event => setNomeConsultor(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="CNPJ" value={cnpjConsultor} onChange={event => setCnpjConsultor(event.target.value)}/>
                    <br/>
                    <select value={codTipoConsultor} onChange={event => setCodTipoConsultor(event.target.value)}>
                        <option defaultValue>Tipo consultor</option>
                        {tipoConsultorList.map(tipoConsultor => {
                            <option key={tipoConsultor.codTipoConsultor} value={tipoConsultor.codTipoConsultor}>{tipoConsultor.nomeTipoConsultor}</option>
                        })}
                    </select>
                </form>
            </div>
        </div>
    );
};