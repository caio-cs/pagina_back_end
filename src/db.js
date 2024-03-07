import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config();

const optionsConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

export const connection = await mysql.createConnection(optionsConnection);