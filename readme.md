# Task Manager

Aplicacao de gerenciamento de tarefas com autenticacao, CRUD completo e atualizacao em tempo real via WebSocket.

---

## Inicio rapido

```bash
# Na raiz do projeto (Desafio1/)
npm install
npm run dev --prefix backend   # instala deps do backend
# Abra: http://localhost:5500/login.html
```

> Antes de rodar: execute `Create.sql` e `Insert.sql` no banco MySQL e configure o arquivo `backend/.env`.

---

## Melhorias futuras

- **Paginacao** — listar tarefas com limit/offset para nao carregar tudo de uma vez
- **Busca por texto** — filtrar tarefas pelo titulo ou descricao via query param
- **Notificacoes de prazo** — alertar quando uma tarefa esta proxima do vencimento (task_end_date)
- **Dashboard com metricas** — grafico simples de tarefas por status e por prioridade
- **Perfil de usuario** — tela para alterar senha e dados do usuario logado
- **Responsividade** — ajustar layout para funcionar bem no celular
- **Exportar relatorio** — gerar PDF ou CSV com as tarefas filtradas
- **Multiplos usuarios com admin** — tela de admin para gerenciar usuarios e tipos de atividade
- **Refresh token** — renovar JWT automaticamente sem pedir login novamente
- **Testes automatizados** — cobertura basica de controllers com Jest ou Vitest
- **Integraçao com Outros Times** — Poder organizar e ver tasks de outros times como gestor
- **Notificaçoes e Gerenciamento do Time** — Poder melhorar o monitoramento e gerenciamento diario e semanal com a priorizaçao de tarefas que entreguem maior valor
