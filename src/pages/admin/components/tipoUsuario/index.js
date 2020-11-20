import React, { useState } from 'react';

import { UsuarioService } from '../../../../services';

export default function TipoUsuario(){
    const [nomeTipoUsuario, setNomeTipoUsuario] = useState('');
    
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            nomeTipoUsuario !== "" && UsuarioService.createTipoUsuario({nomeTipoUsuario});
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    };

    return (
        <div className="admin__item">
            <h3 className="title">Tipo Usuário Component</h3>
            
            <div>
                <form className="form">
                    <div className="form__label">Tipo usuário:</div>
                    <input className="form__input" value={nomeTipoUsuario} onChange={event => setNomeTipoUsuario(event.target.value)}/>
                    
                    <div className="form__button-content">
                        <button className="button form__button" onClick={handleSubmit}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};