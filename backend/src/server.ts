/**
 * Arquivo principal do Server
 */

 //-- Importações base
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import AppError from './errors/AppError';

//-- Abre a conexão com o banco
import './database/db';

//-- Instancia o serviço
const server = express();

//-- Carrega os Middlewares
server.use(helmet())
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes);

//-- Carrega o middleware de erros
server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

//-- Sobe o serviço na porta 3333
server.listen(3333, () => {
  console.log('\x1b[34m%s\x1b[30m','Server running on: http://localhost:3333');
});
