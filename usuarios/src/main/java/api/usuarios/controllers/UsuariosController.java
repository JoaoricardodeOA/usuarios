package api.usuarios.controllers;


import api.usuarios.authentication.JDBCConnectionUsuario;
import api.usuarios.dto.UsuariosDTO;
import api.usuarios.models.RespostaModel;
import api.usuarios.models.UsuarioModel;
import api.usuarios.services.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/usuario")
public class UsuariosController {
    @Autowired
    UsuarioService service;

    JDBCConnectionUsuario connectionUsuario;
    @PutMapping
    public ResponseEntity<Object> login(@RequestBody UsuariosDTO usuario){
        Optional<UsuarioModel> optional = service.getUsuarioByNome(usuario.getNome());
        if (optional.isPresent()) {
           connectionUsuario = new JDBCConnectionUsuario();
            if(connectionUsuario.conectar(usuario.getNome(), usuario.getSenha())){
                return ResponseEntity.status(HttpStatus.OK).body(new RespostaModel("Autorizado","Usuário logado"));
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RespostaModel("Não autorizado","Senha e/ou login inválidos"));
    }
    @PutMapping("/todos")
    public ResponseEntity<Object> usuarios(@RequestBody UsuariosDTO usuario){
        Optional<UsuarioModel> optional = service.getUsuarioByNome(usuario.getNome());
        if (optional.isPresent()) {
            connectionUsuario = new JDBCConnectionUsuario();
            if(connectionUsuario.conectar(usuario.getNome(), usuario.getSenha())){
                return ResponseEntity.status(HttpStatus.OK).body(service.getTodos());
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new RespostaModel("Não autorizado","Senha e/ou login inválidos"));
    }
}
