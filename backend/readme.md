1. Tables and Structure

Crie uma API backend em Node.js utilizando como base estrutural o arquivo `.sql` fornecido como referência do banco de dados.

Você está desenvolvendo este projeto com foco em aprendizado, então priorize:
- simplicidade
- legibilidade
- organização
- clareza no código
- facilidade de entendimento e manutenção

Evite complexidade desnecessária e escreva o código de forma didática e profissional ao mesmo tempo.

# Objetivo

Desenvolver uma API REST focada em:
- Segurança
- Código limpo
- Legibilidade
- Facilidade de manutenção
- Estrutura simples e organizada
- Uso mínimo de complexidade desnecessária

# Escopo Inicial

Neste momento, desenvolver apenas:
- Estrutura do backend
- DTOs
- Autenticação
- Conexão com banco
- Organização de camadas
- Helpers básicos
- Middlewares essenciais

NÃO implementar frontend.

# Stack Obrigatória

- Node.js
- Express
- JWT para autenticação
- Banco relacional baseado no `.sql`
- ORM simples e legível (preferencialmente Prisma ou Sequelize)
- bcrypt para hash de senha
- dotenv
- validação de DTO
- arquitetura modular

# Regras de Desenvolvimento

## Código

- Código totalmente legível
- Nomes claros e padronizados
- Evitar overengineering
- Evitar patterns complexos desnecessários
- Criar funções pequenas e objetivas
- Separar responsabilidades corretamente
- Não criar abstrações antecipadas
- Não usar lógica “mágica”
- Comentários apenas quando realmente necessários
- Comentários curtos e diretos
- Explicar partes importantes de forma simples
- Priorizar aprendizado e entendimento do fluxo

# Segurança (Prioridade Máxima)

Implementar obrigatoriamente:

- Hash seguro de senha com bcrypt
- JWT com expiração
- Middleware de autenticação
- Middleware de tratamento de erros
- Validação de entrada em todas as rotas
- Sanitização básica de inputs
- Não retornar stack trace para cliente
- Uso de variáveis ambiente
- Rate limit básico
- Helmet
- Cors configurável
- Proteção contra SQL Injection usando ORM/query parametrizada
- Separação de permissões futuras preparada

# Estrutura Esperada

Organizar o projeto em algo semelhante a:

src/
 ├── config/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── dtos/
 ├── middlewares/
 ├── helpers/
 ├── routes/
 ├── database/
 ├── modules/
 ├── utils/
 └── app.js

# DTOs

Todos os endpoints devem utilizar DTOs para:
- validação
- tipagem
- padronização de entrada e saída

Os DTOs devem:
- ser simples
- possuir apenas regras necessárias
- evitar excesso de complexidade

# Autenticação

Implementar:
- login
- geração de token JWT
- refresh token preparado para expansão futura
- middleware auth
- rota protegida de teste

Fluxo esperado:
1. Usuário faz login
2. API valida credenciais
3. API retorna JWT
4. Rotas protegidas validam token

# Banco de Dados

Usar o `.sql` enviado como:
- referência estrutural
- modelagem principal
- criação das entidades/modelos

Regras:
- Não criar tabelas desnecessárias
- Respeitar nomes existentes sempre que possível
- Melhorar apenas se necessário para segurança ou organização

# Helpers e Utils

Criar apenas helpers realmente úteis, como:
- geração de token
- tratamento de datas
- responses padronizadas
- logger simples

Evitar helpers genéricos desnecessários.

# Respostas da API

Padronizar respostas:

Sucesso:
{
  "success": true,
  "data": {}
}

Erro:
{
  "success": false,
  "message": "Descrição do erro"
}

# O que NÃO fazer

- Não usar microservices
- Não usar arquitetura extremamente complexa
- Não usar CQRS
- Não usar Event Sourcing
- Não usar DDD excessivo
- Não criar abstrações desnecessárias
- Não usar código difícil de manter
- Não usar comentários excessivos
- Não criar sistema de permissões complexo agora

# Resultado Esperado

Gerar:
- Estrutura inicial completa
- Configuração do projeto
- Autenticação funcional
- DTOs organizados
- Conexão com banco
- Exemplos de rotas
- Middlewares básicos
- Base pronta para expansão futura

O código deve parecer profissional, moderno, seguro, simples de manter e fácil de entender para alguém que ainda está aprendendo backend e arquitetura de APIs.