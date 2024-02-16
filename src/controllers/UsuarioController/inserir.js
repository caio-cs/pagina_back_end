import UsuarioService from "../../services/UsuarioService/UsuarioService.js";

export const inserir = async (req, res) => {
  let json = { error: "", result: {} };

  let { email, senha } = req.body;

  console.log({ email, senha });

  if (!email || !senha) {
    console.log("Campos não enviados");
    json.error = "Campos não enviados";
    return res.json(json);
  }

  console.log("Entrou");

  let usuario = await UsuarioService.inserir(email, senha);

  json.result = {
    id: usuario.id,
    email: usuario.email,
    senha: usuario.senha,
  };

  res.json(json);
};
