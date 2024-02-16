import MarcaController from "../../controllers/MarcaController/MarcaController.js";
import { connection } from "../../db.js";


export const inserir = async (modelo) => {
    return new Promise((aceito, rejeitado) => {

        connection.query('INSERT INTO modelo (modelo) VALUES (?)',
            [modelo],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertid);
            }
        );
    });
}