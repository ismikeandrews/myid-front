import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'orgao-emissor';

const OrgaoEmissorService = {
    
    async createOrgaoEmissor(data){
        return await axios.post(`${url.homolog}/${prefix}/`, data);
    },

    async getOrgaoEmissorList(){
        return await axios.get(`${url.homolog}/${prefix}/`);
    },

    async getOrgaoEmissor(codOrgaoEmissor){
        return await axios.get(`${url.homolog}/${prefix}/${codOrgaoEmissor}`);
    },

    async updateOrgaoEmissor(codOrgaoEmissor){
        return await axios.put(`${url.homolog}/${prefix}/${codOrgaoEmissor}`);
    },

    async destroyOrgaoEmissor(codOrgaoEmissor){
        return await axios.delete(`${url.homolog}/${prefix}/${codOrgaoEmissor}`);
    },

    async createFuncionario(data){
        return await axios.post(`${url.homolog}/${prefix}/funcionario/`, data);
    },
    
    async getFuncionarioList(){
        return await axios.get(`${url.homolog}/${prefix}/funcionario/`);
    },
    
    async deleteFuncionario(codFuncionario){
        return await axios.delete(`${url.homolog}/${prefix}/funcionario/${codFuncionario}`);
    },

    async getFuncionario(codFuncionario){
        return await axios.get(`${url.homolog}/${prefix}/funcionario/${codFuncionario}`);
    },

    async updateFuncionario(codFuncionario){
        return await axios.put(`${url.homolog}/${prefix}/${codFuncionario}`);
    },

}

export default OrgaoEmissorService;