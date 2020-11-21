import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'cidadao';

const CidadaoService = {
    
    async createCidadao(data){
        return await axios.post(`${url.homolog}/${prefix}/`, data);
    },

    async getCidadaoList(){
        return await axios.get(`${url.homolog}/${prefix}/`);
    },

    async getCidadao(codCidadao){
        return await axios.get(`${url.homolog}/${prefix}/${codCidadao}`);
    },

    async updateCidadao(codCidadao, data){
        return await axios.put(`${url.homolog}/${prefix}/${codCidadao}`, data);
    },

    async destroyCidadao(codCidadao){
        return await axios.delete(`${url.homolog}/${prefix}/${codCidadao}`);
    },

    async createCidadaoDocumento(data){
        return await axios.post(`${url.homolog}/${prefix}/documento/`, data);
    },
    
    async getCidadaoDocumentoList(){
        return await axios.get(`${url.homolog}/${prefix}/documento/`);
    },
    
    async deleteCidadaoDocumento(codDocumentoCidadao){
        return await axios.delete(`${url.homolog}/${prefix}/documento/${codDocumentoCidadao}`);
    },

    async getCidadaoDocumento(codDocumentoCidadao){
        return await axios.get(`${url.homolog}/${prefix}/documento/${codDocumentoCidadao}`);
    },

}

export default CidadaoService;