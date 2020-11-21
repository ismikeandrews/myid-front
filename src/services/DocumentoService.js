import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'documento';

const DocumentoService = {
    
    async createDocumento(data){
        return await axios.post(`${url.homolog}/${prefix}/`, data);
    },

    async getDocumentoList(){
        return await axios.get(`${url.homolog}/${prefix}/`);
    },

    async getDocumento(codDocumento){
        return await axios.get(`${url.homolog}/${prefix}/${codDocumento}`);
    },

    async updateDocumento(codDocumento){
        return await axios.put(`${url.homolog}/${prefix}/${codDocumento}`);
    },

    async destroyDocumento(codDocumento){
        return await axios.delete(`${url.homolog}/${prefix}/${codDocumento}`);
    },

    async createDocumentoCampo(data){
        return await axios.post(`${url.homolog}/${prefix}/campo/`, data);
    },

    async getDocumentoCampoList(){
        return await axios.get(`${url.homolog}/${prefix}/campo/`);
    },

    async getDocumentoCampo(codDocumentoCampo){
        return await axios.get(`${url.homolog}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async updateDocumentoCampo(codDocumentoCampo){
        return await axios.put(`${url.homolog}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async destroyDocumentoCampo(codDocumentoCampo){
        return await axios.delete(`${url.homolog}/${prefix}/campo/${codDocumentoCampo}`);
    },

    async createDocumentoCampoOpcao(data){
        return await axios.post(`${url.homolog}/${prefix}/campo/opcao/`, data);
    },

    async getDocumentoCampoOpcaoList(){
        return await axios.get(`${url.homolog}/${prefix}/campo/opcao/`);
    },

    async getDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.get(`${url.homolog}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

    async updateDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.put(`${url.homolog}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

    async destroyDocumentoCampoOpcao(codDocumentoCampoOpcao){
        return await axios.delete(`${url.homolog}/${prefix}/campo/opcao/${codDocumentoCampoOpcao}`);
    },

}

export default DocumentoService;