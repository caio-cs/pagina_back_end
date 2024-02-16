import MarcaService from "../../services/MarcaService/MarcaService.js";

export const buscarUm = async (req, res) => {
    let json = { error: '', result: {} };

    let id = req.params.id;
    let carro = await MarcaService.buscarUm(id)

    if (carro) {
        json.result = carro;
    }
    res.json(json);
}