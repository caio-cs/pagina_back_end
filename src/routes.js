import { Router } from "express";
import CarroController from './controllers/CarroController.js';
import MarcaController from "./controllers/MarcaController/MarcaController.js";
import { multerDest } from "./utils/multer/newUpload.js";

const router = Router();
const uploadFirst = multerDest('./src/uploads');



router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:id', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:id', CarroController.alterar);
router.delete('/carro/:id', CarroController.excluir);

router.get('/marca', MarcaController.buscarTodos);
router.get('/marca/:id', MarcaController.buscarUm);
router.post('/marca', MarcaController.inserir);
router.put('/marca/:id', MarcaController.alterar);
router.delete('/marca/:id', MarcaController.excluir);

router.post('/upload',
    uploadFirst.single('avatar'),
    (req, res) => {
        req.file
        console.log(req.file)
        res.end()
    }
);

router.get('/usuarios', )

export default router;