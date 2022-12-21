import React, {useState, useEffect} from 'react';
import LoginService from '../Services/LoginService';
import {Link, useNavigate, useParams } from 'react-router-dom';

const GerenciaUsuarios = () =>{
    const [usuarios, setUsuarios] = useState([])
    const history = useNavigate();
    
    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        LoginService.getUsuarios().then((response) => {
            setUsuarios(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            history('/login');
        })
    }



    return(
        <div className='container'>
            <div className='navbar navbar-expand-md'>
             <Link to="/login" className="btn btn-danger" style={{marginLeft:"2%"}}> deslogar </Link>
            </div>
            <h2 className="text-center" style={{marginTop:"1%"}}>Lista de usuários</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Acessos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map(
                                    usuario =>
                                    <tr key = {usuario.id}>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.roles}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );

}
export default GerenciaUsuarios;