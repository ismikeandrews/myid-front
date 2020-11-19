import React, { useState } from 'react';

export default function TipoConsultor(){
    const [nomeTipoConsultor, setNomeTipoConsultor] = useState('');

    return (
        <div>
            <h3>Tipo Consultor Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Tipo consultor" value={nomeTipoConsultor} onChange={event => setNomeTipoConsultor(event.target.value)}/>
                </form>
            </div>
        </div>
    );
};