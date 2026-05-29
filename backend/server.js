import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { sequelize } from './src/database/Connection.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 3000;

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
}
async function startServer() {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

connectToDatabase();
startServer();