import UsuarioService from "../..services/UsuarioService/UsuarioService.js";
import { buscarTodos } from "./buscarTodos.js";
import { buscarUm } from "./buscarUm.js"; 
import { alterar } from "./alterar.js";
import { excluir } from "./excluir.js"; 
import { inserir } from "./inserir.js";

export default{
    buscarTodos,
    buscarUm,
    alterar,
    excluir,
    inserir
}