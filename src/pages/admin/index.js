import React from 'react';

import { 
    Cidadao, 
    Usuario, 
    Documento, 
    TipoUsuario, 
    OrgaoEmissor, 
    Funcionario, 
    DocumentoCidadao, 
    DocumentoCampo, 
    DocumentoCampoOpcao,
    TipoConsultor,
    ConsultorDocumento,
    Consultor
} from './components'

export default function Admin(){
    return(
        <div className="admin">

            <div className="admin__menu">
                <h1>Admin Page</h1>
            </div>

            <div className="admin__container">
                <TipoUsuario/>
                <Usuario/>
                
                <OrgaoEmissor/>
                <Funcionario/>
                
                <Cidadao/>
                <Documento/>
                <DocumentoCidadao/>
                <DocumentoCampo/>
                <DocumentoCampoOpcao/>
                
                <TipoConsultor/>
                <Consultor/>
                <ConsultorDocumento/>
            </div>
        </div>
    )
}