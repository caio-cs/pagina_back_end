import { connection } from "../../db.js";

export const buscarUm = async (id) => {
    console.log('passou aqui', id)

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM marcas');
        console.log('rows', rows, fields)

        return rows
    } catch (error) {
        console.error(error)
    }
}