import UsuarioService from "../../services/UsuarioService/UsuarioService.js";

export const alterar = async (req, res) => {
  let json = { error: "", result: {} };

  let id = req.params.id;
  let { email, senha } = req.body;

  console.log({ email, senha });

  if (!id || !email || !senha) {
    console.log("Campos não enviados");
    json.error = "Campos não enviados";
    return res.json(json);
  }

  console.log("Entrou");

  let { affectedRows } = await UsuarioService.alterar(id, email, senha);
// duvida deixa ou não o id por ele ser só a posição?
  json.result = {
    id,
    email,
    senha,
    affectedRows,
  };

  res.json(json);
};
