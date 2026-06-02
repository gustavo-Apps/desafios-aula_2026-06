import 'dotenv/config';
import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { sequelize } from './src/Database/Connection.js';
import appRoutes from './src/app.js';
import { initWebSocket } from './src/websocket/ws.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/api', appRoutes);

// Cria servidor HTTP separado para compartilhar com o WebSocket
const server = http.createServer(app);
initWebSocket(server);

const PORT = process.env.PORT || 3001;

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
  server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`WebSocket disponivel em ws://localhost:${PORT}`);
  });
}

connectToDatabase();
startServer();

//Rota começa com: http://localhost:${PORT}/api/*