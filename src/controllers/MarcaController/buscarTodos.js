import MarcaService from "../../services/MarcaService/MarcaService.js";

export const buscarTodos = async (req, res) => {
    let json = { error: '', result: [] };

    let carros = await MarcaService.buscarTodos();

    for (let i in carros) {
        json.result.push({
            id: carros[i].id,
            descricao: carros[i].modelo
        });
    }
    res.json(json);
}