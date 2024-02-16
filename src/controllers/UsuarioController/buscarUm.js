import UsuarioService from "../../services/UsuarioService/UsuarioService.js";

export const buscarUm = async (req, res) => {
    let json = { error: '', result: {} };

    let id = req.params.id;
    let usuario = await UsuarioService.buscarUm(id)

    if (usuario) {
        json.result = usuario;
    }
    res.json(json);
}