import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'usuario';

const UsuarioService = {

    async createUsuario(data){
        return await axios.post(`${url.homolog}/${prefix}/`, data);
    },

    async getUsuarioList(){
        return await axios.get(`${url.homolog}/${prefix}/`);
    },

    async getUsuario(codUsuario){
        return await axios.get(`${url.homolog}/${prefix}/${codUsuario}`);
    },

    async updateUsuario(codUsuario, data){
        return await axios.put(`${url.homolog}/${prefix}/${codUsuario}`, data);
    },

    async destroyUsuario(codUsuario){
        return await axios.delete(`${url.homolog}/${prefix}/${codUsuario}`);
    },

    async createTipoUsuario(data){
        return await axios.post(`${url.homolog}/${prefix}/tipo/`, data);
    },

    async getTipoUsuarioList(){
        return await axios.get(`${url.homolog}/${prefix}/tipo/`);
    },

    async getTipoUsuario(codTipoUsuario){
        return await axios.get(`${url.homolog}/${prefix}/tipo/${codTipoUsuario}`);
    },

    async updateTipoUsuario(codTipoUsuario, data){
        return await axios.put(`${url.homolog}/${prefix}/tipo/${codTipoUsuario}`, data);
    },

    async destroyTipoUsuario(codTipoUsuario){
        return await axios.delete(`${url.homolog}/${prefix}/tipo/${codTipoUsuario}`);
    },

}

export default UsuarioService;