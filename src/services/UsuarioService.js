import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'usuario';

const UsuarioService = {
    
    async createUsuario(data){
        return await axios.post(`${url.development}/${prefix}/`, data);
    },

    async getUsuarioList(){
        return await axios.get(`${url.development}/${prefix}/`);
    },

    async getUsuario(codUsuario){
        return await axios.get(`${url.development}/${prefix}/${codUsuario}`);
    },

    async updateUsuario(codUsuario){
        return await axios.put(`${url.development}/${prefix}/${codUsuario}`);
    },

    async destroyUsuario(codUsuario){
        return await axios.delete(`${url.development}/${prefix}/${codUsuario}`);
    },

    async createTipoUsuario(data){
        return await axios.post(`${url.development}/${prefix}/tipo/`, data);
    },

    async getTipoUsuarioList(){
        return await axios.get(`${url.development}/${prefix}/tipo/`);
    },

    async getTipoUsuario(codTipoUsuario){
        return await axios.get(`${url.development}/${prefix}/tipo/${codTipoUsuario}`);
    },

    async updateTipoUsuario(codTipoUsuario){
        return await axios.put(`${url.development}/${prefix}/tipo/${codTipoUsuario}`);
    },

    async destroyTipoUsuario(codTipoUsuario){
        return await axios.delete(`${url.development}/${prefix}/tipo/${codTipoUsuario}`);
    },

}

export default UsuarioService;