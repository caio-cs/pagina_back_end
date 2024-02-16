import UsuarioController from "../../controllers/UsuarioController/UsuarioController.js";
import { connection } from "../../db.js";

export const buscarTodos = async () => {
    try {
      const [rows] = await connection.query('SELECT * FROM login');
      return rows;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  