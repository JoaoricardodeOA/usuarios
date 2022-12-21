package api.usuarios.repositories;

import api.usuarios.models.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.lang.annotation.Annotation;
import java.util.Optional;

@Repository
public interface UsuarioRepositorio extends JpaRepository<UsuarioModel,Long> {
    Optional<UsuarioModel> findByNome(String nome);
}
