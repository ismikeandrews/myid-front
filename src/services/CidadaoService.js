import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'cidadao';

const CidadaoService = {
    
    async createCidadao(data){
        return await axios.post(`${url.development}/${prefix}/`, data);
    },

    async getCidadaoList(){
        return await axios.get(`${url.development}/${prefix}/`);
    },

    async getCidadao(codCidadao){
        return await axios.get(`${url.development}/${prefix}/${codCidadao}`);
    },

    async updateCidadao(codCidadao){
        return await axios.put(`${url.development}/${prefix}/${codCidadao}`);
    },

    async destroyCidadao(codCidadao){
        return await axios.delete(`${url.development}/${prefix}/${codCidadao}`);
    },

    async createCidadaoDocumento(data){
        return await axios.post(`${url.development}/${prefix}/documento/`, data);
    },
    
    async getCidadaoDocumentoList(){
        return await axios.get(`${url.development}/${prefix}/documento/`);
    },
    
    async deleteCidadaoDocumento(codDocumentoCidadao){
        return await axios.delete(`${url.development}/${prefix}/documento/${codDocumentoCidadao}`);
    },

    async getCidadaoDocumento(codDocumentoCidadao){
        return await axios.get(`${url.development}/${prefix}/documento/${codDocumentoCidadao}`);
    },

}

export default CidadaoService;