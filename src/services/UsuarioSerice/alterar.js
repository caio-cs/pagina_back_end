import UsuarioController from "../../controllers/UsuarioController/UsuarioController.js";
import { connection } from "../../db.js";
export const alterar = async (id, email, senha) => {
    try {
      const affectedRows = await connection.query(
        `UPDATE login SET email = ?, senha = ? WHERE id = ?`,
        [email, senha, Number(id)]
      );
  
      if (affectedRows.affectedRows === 0) {
        return null;
      }
//   mesma duvida referente ao id deixa ou não
      return {
        id,
        email,
        senha,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  