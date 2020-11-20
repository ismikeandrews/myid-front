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
        <div>
            <h3>Tipo Consultor Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Tipo consultor" value={nomeTipoConsultor} onChange={event => setNomeTipoConsultor(event.target.value)}/>
                    <br/>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};