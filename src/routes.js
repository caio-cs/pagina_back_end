import { Router } from "express";
import ProdutoController from "./controllers/produtosController/produtosController.js";

const router = Router();

router.get('/produto', ProdutoController.listarProdutos);
router.get('/produto/categoria/:categoria', ProdutoController.filtrarPorCategoria);
router.get('/produto/pesquisa/:pesquisa', ProdutoController.pesquisarPorNome);

export default router;