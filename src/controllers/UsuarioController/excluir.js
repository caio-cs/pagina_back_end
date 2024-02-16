import UsuarioService from "../../services/UsuarioService/UsuarioService.js";

export const excluir = async (req, res) => {
  let json = { error: "", result: {} };

  await UsuarioService.excluir(req.params.id);

  res.json(json);
};