import React, {useState, useEffect} from 'react';
import LoginService from '../Services/LoginService';
import {Link, useNavigate, useParams } from 'react-router-dom';


const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const history = useNavigate();

    useEffect(() => {

    }, [])
    const login = (e) => {
        e.preventDefault();
        const log = {nome,senha}
        LoginService.setPasswordAndUsername(log);
        LoginService.login().then((response)=>{
            alert(response.data.mensagem)
            history('/usuarios');
        }).catch(error => {
            console.log(log)
            console.log(error)
            alert(error.response.data.mensagem)
        })

    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"2%"}}>
                       <div className='d-flex justify-content-center'>
                       <h1>Login </h1>
                       </div>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Usuário:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Nome"
                                        name = "username"
                                        className = "form-control"
                                        value = {nome}
                                        onChange = {(e) => setNome(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2" style={{marginTop:"2%"}}>
                                    <label className = "form-label"> Senha :</label>
                                    <input
                                        type = "password"
                                        placeholder = "Senha"
                                        name = "password"
                                        className = "form-control"
                                        value = {senha}
                                        onChange = {(e) => setSenha(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" style={{marginTop:"5%"}} onClick = {(e) => login(e)}>Enviar</button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );

}
export default Login;