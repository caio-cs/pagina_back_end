import dotenv from 'dotenv';
dotenv.config({ path: 'variaveis.env' });

import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './routes.js';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiRouter.get('/endpoint1', (req, res) => {
    res.json({ message: 'Rota /api/endpoint1' });
});

apiRouter.post('/endpoint2', (req, res) => {
    res.json({ message: 'Rota /api/endpoint2' });
});

const authMiddlewere = (req, res, next)=>{
    // res.json('travou')
    return next()
}

app.use('/api', authMiddlewere, apiRouter);

app.listen(process.env.PORT, () => {
    console.log('►', new Date().toLocaleTimeString('pt-br'))

    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})