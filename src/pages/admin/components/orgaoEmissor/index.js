import React, { useState } from 'react';

export default function OrgaoEmissor(){
    const [nomeOrgaoEmissor, setNomeOrgaoEmissor] = useState('');
    const [siglaOrgaoEmissor, setSiglaOrgaoEmissor] = useState('');

    return(
        <div>
            <h3>Orgao Emissor Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome do Orgão Emissor" value={nomeOrgaoEmissor} onChange={event => setNomeOrgaoEmissor(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Sigla" value={siglaOrgaoEmissor} onChange={event => setSiglaOrgaoEmissor(event.target.value)}/>
                </form>
            </div>
        </div>
    );
};