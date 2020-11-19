const AuthService = {
    
    async storeAuthData(data){
        try {
            const stringData = JSON.stringify(data); //alterar aqui*
            localStorage.setItem("authData", stringData);
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
        localStorage.removeItem("authData");
    }

};

export default AuthService;