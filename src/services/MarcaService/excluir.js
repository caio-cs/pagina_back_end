import MarcaController from "../../controllers/MarcaController/MarcaController.js";
import { connection } from "../../db.js";

export const excluir = async (id) => {
    return new Promise((aceito, rejeitado) => {
        connection.query('DELETE FROM marcas WHERE id = ?', [id], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}