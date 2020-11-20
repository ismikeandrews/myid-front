import React, { useState } from 'react';

import { ConsultorService } from '../../../../services';

export default function TipoConsultor(){
    const [nomeTipoConsultor, setNomeTipoConsultor] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const res = await ConsultorService.createTipoConsultor({nomeTipoConsultor});
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Tipo Consultor Component</h3>
            
            <div>
                <form className="form">
                    <div className="form__label">Tipo consultor:</div>
                    <input className="form__input" type="text" value={nomeTipoConsultor} onChange={event => setNomeTipoConsultor(event.target.value)}/>
                    
                    <div className="form__button-content">
                        <button className="button form__button" onClick={handleSubmit}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};