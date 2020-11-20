import React, { useState } from 'react';

import { UsuarioService } from '../../../../services';

export default function TipoUsuario(){
    const [nomeTipoUsuario, setNomeTipoUsuario] = useState('');
    
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            nomeTipoUsuario !== "" && UsuarioService.createTipoUsuario({nomeTipoUsuario})
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro durante a comunicação com o servidor');
        }
    }

    return(
        <div>
            <h3>Tipo Usuario Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Tipo de Usuario" value={nomeTipoUsuario} onChange={event => setNomeTipoUsuario(event.target.value)}/>
                    <br/>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};