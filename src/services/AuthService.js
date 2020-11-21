import axios from 'axios';
import url from '../config/enviroment'

const AuthService = {
    
    async storeAuthData(dataObj){
        try {
            const { data } = await axios.post(`${url.homolog}/login`, dataObj);
            console.log(data)
            const stringData = JSON.stringify(data);
            localStorage.setItem("authData", stringData);
            return true;
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro :(");
        }
    },

    getAuthData(){
        let authData = localStorage.getItem("authData");
        return authData != null ? JSON.parse(authData) : null;
    },

    logout(){
        localStorage.clear();
    }

};

export default AuthService;