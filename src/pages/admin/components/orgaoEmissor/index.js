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
        <div className="admin__item">
            <h3 className="title">Orgao Emissor Component</h3>
            
            <div>
                <form className="form">
                    <div>
                        <div className="form__label">Nome do Orgão Emissor:</div>
                        <input className="form__input" value={nomeOrgaoEmissor} onChange={event => setNomeOrgaoEmissor(event.target.value)}/>
                    </div>
                    
                    <div>
                        <div className="form__label">Sigla:</div>
                        <input className="form__input" type="text" value={siglaOrgaoEmissor} onChange={event => setSiglaOrgaoEmissor(event.target.value)}/>
                    </div>
                    
                    <div className="form__button-content">
                        <button className="button form__button" onClick={handleSubmit}>Cadastro</button>
                    </div>
                </form>
            </div>
        </div>
    );
};