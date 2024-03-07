import { connection } from "../../db.js";
const db = connection;

export const listarProdutos = async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM produtos');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const filtrarPorCategoria = async (req, res) => {
  const categoria = req.params.categoria;
  try {
    const [rows, fields] = await db.query('SELECT * FROM produtos WHERE categoria = ?', [categoria]);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao filtrar produtos por categoria:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const pesquisarPorNome = async (req, res) => {
  const termo = req.params.pesquisa;
  try {
    const [rows, fields] = await db.query('SELECT * FROM produtos WHERE nome LIKE ?', [`%${termo}%`]);
    res.json(rows);
  } catch (error) {
    console.error('Erro ao pesquisar produtos por nome:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export default {
    listarProdutos,
    filtrarPorCategoria,
    pesquisarPorNome
}