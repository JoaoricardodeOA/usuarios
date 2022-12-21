import axios from "axios";

const LOGIN_URL = "http://localhost:8080/api/usuario";
let login;

class LoginService{
    login(){
        return axios.put(LOGIN_URL,login);
    }
    setPasswordAndUsername(log){
        login = log;
    }
    getUsuarios(){
        return axios.put(LOGIN_URL+"/todos",login);
    }
}
export default new LoginService;