package api.usuarios.authentication;

import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.context.annotation.Bean;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@NoArgsConstructor
public class JDBCConnectionUsuario {
    final String banco = "jdbc:oracle:thin:@localhost:1521:xe";
    public boolean conectar(String nome, String senha){
        boolean validar;
        try {
            Connection conn = DriverManager.getConnection(banco, nome, senha);
            return true;
        } catch (SQLException e) {
            return false;

        }
    }

}
