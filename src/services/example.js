import axios from 'axios';
import url from '../config/enviroment';
const prefix = 'example'; // Change here*

const exampleService = {
    
    async createExample(data){
        return await axios.post(`${url.development}/${prefix}/`, data);
    },

}

export default exampleService;