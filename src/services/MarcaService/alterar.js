import MarcaController from "../../controllers/MarcaController/MarcaController.js";
import { connection } from "../../db.js";

export const alterar = async (id, marca) => {
    try {
        return await connection.query(
            'UPDATE marcas SET marca = ? WHERE id = ?',
            [marca, Number(id)]
        );
    } catch (error) {
        console.error(error)
    }

}