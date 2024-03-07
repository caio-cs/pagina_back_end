
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apiRouter from './routes.js';

dotenv.config({ path: 'variaveis.env' });
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authMiddlewere = (req, res, next) => {
    return next();
};

app.use('/api', authMiddlewere, apiRouter);

app.listen(process.env.PORT, () => {
    console.log('►', new Date().toLocaleTimeString('pt-br'));
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});