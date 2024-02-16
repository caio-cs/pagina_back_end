import UsuarioController from "../../controllers/UsuarioController/UsuarioController.js";
import { connection } from "../../db.js";

export const inserir = async (email, senha) => {
    console.log('Inserindo novo usuário...');
  
    try {
      const usuario = await connection.query(
        `INSERT INTO login (email, senha) VALUES (?, ?)`,
        [email, senha]
      );
  
      return {
        id: usuario.insertId,
        email,
        senha,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  