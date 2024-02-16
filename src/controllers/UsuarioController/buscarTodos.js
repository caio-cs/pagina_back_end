import UsuarioService from "../../services/UsuarioService/UsuarioService.js";

export const buscarTodos = async (req, res) => {
  let json = { error: "", result: [] };

  let usuarios = await UsuarioService.buscarTodos();

  for (let usuario of usuarios) {
    json.result.push({
      id: usuario.id,
      email: usuario.email,
      senha: usuario.senha,
    });
  }

  res.json(json);
};