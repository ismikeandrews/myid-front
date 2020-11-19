import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'documento';

const DocumentoService = {
    
    async createDocumento(data){
        return await axios.post(`${url.development}/${prefix}/`, data);
    },

    async getDocumentoList(){
        return await axios.get(`${url.development}/${prefix}/`);
    },

    async getDocumento(codDocumento){
        return await axios.get(`${url.development}/${prefix}/${codDocumento}`);
    },

    async updateDocumento(codDocumento){
        return await axios.put(`${url.development}/${prefix}/${codDocumento}`);
    },

    async destroyDocumento(codDocumento){
        return await axios.delete(`${url.development}/${prefix}/${codDocumento}`);
    },

    async createDocumentoCampo(data){
        return await axios.post(`${url.development}/${prefix}/campo/`, data);
    },

    async getDocumentoCampoList(){
        return await axios.get(`${url.development}/${prefix}/campo/`);
    },

    async getDocumentoCampo(codDocumentoCampo){
        return await axios.get(`${url.development}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async updateDocumentoCampo(codDocumentoCampo){
        return await axios.put(`${url.development}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async destroyDocumentoCampo(codDocumentoCampo){
        return await axios.delete(`${url.development}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async createDocumentoCampoOpcao(data){
        return await axios.post(`${url.development}/${prefix}/campo/opcao/`, data);
    },

    async getDocumentoCampoOpcaoList(){
        return await axios.get(`${url.development}/${prefix}/campo/opcao/`);
    },

    async getDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.get(`${url.development}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

    async updateDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.put(`${url.development}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

    async destroyDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.delete(`${url.development}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

}

export default DocumentoService;