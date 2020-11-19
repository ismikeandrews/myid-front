import React, { useState } from 'react';

export default function Cidadao(){
    const [cpfCidadao, setCpfCidadao] = useState('');

    return (
        <div>
            <h3>Cidadao Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="CPF" value={cpfCidadao} onChange={event => setCpfCidadao(event.target.value)}/>
                </form>
            </div>
        </div>
    );
};