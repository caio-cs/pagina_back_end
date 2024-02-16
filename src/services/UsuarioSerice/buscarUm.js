import { connection } from "../../db.js";

export const buscarUm = async (id) => {
    console.log('Buscando usuário com id:', id);
//   duvida buscar por id ou email?
    try {
      const [usuario] = await connection.query(
        `SELECT * FROM login WHERE id = ?`,
        [Number(id)]
      );
  
      if (usuario.length === 0) {
        return null;
      }
  
      return usuario[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  