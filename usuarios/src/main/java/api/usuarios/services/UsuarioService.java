package api.usuarios.services;

import api.usuarios.models.UsuarioModel;
import api.usuarios.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepositorio repositorio;

    public Optional<UsuarioModel> getUsuarioByNome(String nome) {
        return repositorio.findByNome(nome);
    }
    public List<UsuarioModel> getTodos(){return repositorio.findAll();}
}
