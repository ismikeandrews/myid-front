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
        <div>
            <h1>Admin Page</h1>
            <TipoUsuario/>
            <Usuario/>
            <Cidadao/>
            <OrgaoEmissor/>
            <Documento/>
            <Funcionario/>
            <DocumentoCidadao/>
            <DocumentoCampo/>
            <DocumentoCampoOpcao/>
            <TipoConsultor/>
            <Consultor/>
            <ConsultorDocumento/>
        </div>
    )
}