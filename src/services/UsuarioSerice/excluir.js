import UsuarioController from "../../controllers/UsuarioController/UsuarioController.js";
import { connection } from "../../db.js";
export const excluir = async (id) => {
    console.log('Excluindo usuário com id:', id);
  
    try {
      const affectedRows = await connection.query(
        `DELETE FROM login WHERE id = ?`,
        [Number(id)]
      );
  
      if (affectedRows.affectedRows === 0) {
        return null;
      }
  
      return { message: "Usuário excluído com sucesso" };
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  