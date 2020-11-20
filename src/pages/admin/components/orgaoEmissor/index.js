import React, { useState } from 'react';

import { OrgaoEmissorService } from '../../../../services';

export default function OrgaoEmissor(){
    const [nomeOrgaoEmissor, setNomeOrgaoEmissor] = useState('');
    const [siglaOrgaoEmissor, setSiglaOrgaoEmissor] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const data = {nomeOrgaoEmissor, siglaOrgaoEmissor};
            const res = await OrgaoEmissorService.createOrgaoEmissor(data);
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div>
            <h3>Orgao Emissor Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Nome do Orgão Emissor" value={nomeOrgaoEmissor} onChange={event => setNomeOrgaoEmissor(event.target.value)}/>
                    <br/>
                    <input type="text" placeholder="Sigla" value={siglaOrgaoEmissor} onChange={event => setSiglaOrgaoEmissor(event.target.value)}/>
                    <br/>
                    <button onClick={handleSubmit}>Cadastro</button>
                </form>
            </div>
        </div>
    );
};