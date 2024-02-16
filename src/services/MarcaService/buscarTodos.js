import MarcaController from "../../controllers/MarcaController/MarcaController.js";
import { connection } from "../../db.js";


export const buscarTodos = async () => {
    try {
        return [rows, fields] = await connection.query('SELECT * FROM marcas');
    } catch (error) {
        console.error(error)
    }


}