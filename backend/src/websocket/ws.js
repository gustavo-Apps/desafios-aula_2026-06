import { WebSocketServer } from 'ws';

let wss = null;

/**
 * Inicializa o WebSocket Server no mesmo servidor HTTP do Express.
 * @param {import('http').Server} httpServer
 */
export function initWebSocket(httpServer) {
  wss = new WebSocketServer({ server: httpServer });

  wss.on('connection', (ws) => {
    console.log('[WS] Cliente conectado. Total:', wss.clients.size);

    ws.on('close', () => {
      console.log('[WS] Cliente desconectado. Total:', wss.clients.size);
    });
  });

  console.log('[WS] WebSocket Server iniciado.');
}

/**
 * Envia um evento para todos os clientes conectados.
 * @param {string} event  Nome do evento (ex: 'task:created')
 * @param {object} data   Dados a enviar
 */
export function broadcast(event, data) {
  if (!wss) return;

  const message = JSON.stringify({ event, data });

  wss.clients.forEach((client) => {
    if (client.readyState === 1) { // 1 = OPEN
      client.send(message);
    }
  });
}
