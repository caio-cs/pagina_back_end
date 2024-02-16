import MarcaService from "../../services/MarcaService/MarcaService.js";

export const excluir = async (req, res) => {
    let json = { error: '', result: {} };

    await MarcaService.excluir(req.params.id);

    res.json(json);
}