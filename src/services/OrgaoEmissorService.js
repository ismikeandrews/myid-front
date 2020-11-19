import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'orgao-emissor';

const OrgaoEmissorService = {
    
    async createOrgaoEmissor(data){
        return await axios.post(`${url.development}/${prefix}/`, data);
    },

    async getOrgaoEmissorList(){
        return await axios.get(`${url.development}/${prefix}/`);
    },

    async getOrgaoEmissor(codOrgaoEmissor){
        return await axios.get(`${url.development}/${prefix}/${codOrgaoEmissor}`);
    },

    async updateOrgaoEmissor(codOrgaoEmissor){
        return await axios.put(`${url.development}/${prefix}/${codOrgaoEmissor}`);
    },

    async destroyOrgaoEmissor(codOrgaoEmissor){
        return await axios.delete(`${url.development}/${prefix}/${codOrgaoEmissor}`);
    },

    async createFuncionario(data){
        return await axios.post(`${url.development}/${prefix}/funcionario/`, data);
    },
    
    async getFuncionarioList(){
        return await axios.get(`${url.development}/${prefix}/funcionario/`);
    },
    
    async deleteFuncionario(codFuncionario){
        return await axios.delete(`${url.development}/${prefix}/funcionario/${codFuncionario}`);
    },

    async getFuncionario(codFuncionario){
        return await axios.get(`${url.development}/${prefix}/funcionario/${codFuncionario}`);
    },

    async updateFuncionario(codFuncionario){
        return await axios.put(`${url.development}/${prefix}/${codFuncionario}`);
    },

}

export default OrgaoEmissorService;