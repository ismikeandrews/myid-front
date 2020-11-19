import React, { useState } from 'react';

export default function TipoUsuario(){
    const[nomeTipoUsuario, setNomeTipoUsuario] = useState('');
    
    return(
        <div>
            <h3>Tipo Usuario Component</h3>
            <hr/>
            <div>
                <form>
                    <input type="text" placeholder="Tipo de Usuario" value={nomeTipoUsuario} onChange={event => setNomeTipoUsuario(event.target.value)}/>
                </form>
            </div>
        </div>
    );
};