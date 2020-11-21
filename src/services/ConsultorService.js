import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'consultor';

const ConsultorService = {
    
    async createConsultor(data){
        return await axios.post(`${url.homolog}/${prefix}/`, data);
    },

    async getConsultorList(){
        return await axios.get(`${url.homolog}/${prefix}/`);
    },

    async getConsultor(codConsultor){
        return await axios.get(`${url.homolog}/${prefix}/${codConsultor}`);
    },

    async updateConsultor(codConsultor){
        return await axios.put(`${url.homolog}/${prefix}/${codConsultor}`);
    },

    async destroyConsultor(codConsultor){
        return await axios.delete(`${url.homolog}/${prefix}/${codConsultor}`);
    },

    async createConsultorDocumento(data){
        return await axios.post(`${url.homolog}/${prefix}/documento/`, data);
    },

    async getConsultorDocumentoList(){
        return await axios.get(`${url.homolog}/${prefix}/documento/`);
    },

    async getConsultorDocumento(codConsultorDocumento){
        return await axios.get(`${url.homolog}/${prefix}/documento/${codConsultorDocumento}`);
    },

    async destroyConsultorDocumento(codConsultorDocumento){
        return await axios.delete(`${url.homolog}/${prefix}/documento/${codConsultorDocumento}`);
    },

    async createTipoConsultor(data){
        return await axios.post(`${url.homolog}/${prefix}/tipo/`, data);
    },

    async getTipoConsultorList(){
        return await axios.get(`${url.homolog}/${prefix}/tipo/`);
    },

    async getTipoConsultor(codTipoConsultor){
        return await axios.get(`${url.homolog}/${prefix}/tipo/${codTipoConsultor}`);
    },

    async updateTipoConsultor(codTipoConsultor){
        return await axios.put(`${url.homolog}/${prefix}/tipo/${codTipoConsultor}`);
    },

    async destroyTipoConsultor(codTipoConsultor){
        return await axios.delete(`${url.homolog}/${prefix}/tipo/${codTipoConsultor}`);
    },


}

export default ConsultorService;