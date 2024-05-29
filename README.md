# API CRUD de Filmes usando NestJS e TypeORM

Este projeto é uma API CRUD (Create, Read, Update, Delete) de filmes com autenticação JWT (JSON Web Tokens), construída utilizando NestJS, TypeORM, PostgreSQL e Docker. A API permite gerenciar uma coleção de filmes, onde os usuários autenticados podem adicionar, visualizar, atualizar e remover filmes.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12.x ou superior)
- npm (geralmente instalado com o Node.js)
- Docker

## Deploy

Feito o deploy da API no AWS EC2 (Em shutdown para poupar custos desnecessários)

Banco de dados de produção no AWS RDS - Postgres (Em shutdown para poupar custos desnecessários)

**Instalando Dependências:**

   Navegue até o diretório do projeto e instale as dependências usando npm:

   ```bash
   cd nome-do-repositorio
   npm install
   ```

**Configurando as Variáveis de Ambiente:**

   Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário, especialmente para configurações do banco de dados e segredo JWT.

## Executando a Aplicação com Docker Compose

Este projeto utiliza Docker Compose para facilitar a execução do NestJS junto com um banco de dados PostgreSQL. Certifique-se de que o Docker esteja em execução em sua máquina.

**Acessando a API:**

   A API estará disponível Você pode usar ferramentas como Postman ou cURL para interagir com os endpoints.

- **`auth/`**: Controladores, serviços, entidades e guardas relacionados à autenticação usando JWT.
- **`movies/`**:  Controladores, serviços e entidades para o CRUD de filmes
- **`database/`**: Módulo de configuração do banco de dados.

## Endpoints da API

O projeto possui documentação com swagger. Na documentação será possível visualizar todos os endpoints, seus requerimentos para requisição e seus retornos.

### Autenticação

- `POST /auth/register`: Registro de novo usuário.
- `POST /auth/login`: Login de usuário (retorna token JWT).

### Filmes

- `GET /movies`: Retorna a lista de todos os filmes.
- `GET /movies/:id`: Retorna detalhes de um filme específico.
- `POST /movies`: Adiciona um novo filme.
- `PUT /movies/:id`: Atualiza os detalhes de um filme existente.
- `DELETE /movies/:id`: Remove um filme existente.

## Variáveis de Ambiente
Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`. Aqui estão algumas variáveis importantes:

- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`: Configurações de conexão com o banco de dados PostgreSQL.
- `JWT_SECRET`: Segredo utilizado para assinar tokens JWT.

## Nível de Experiência com Tecnologias

Aqui está uma breve descrição do meu nível de experiência com as tecnologias utilizadas no projeto:

### Avançado
TypeScript: Desenvolvimento robusto e escalável com tipagem forte.
PostgreSQL: Gerenciamento de banco de dados relacional com eficiência e integridade.
TypeORM: ORM para manipulação de dados com facilidade e segurança.
Nest.js: Framework Node.js para construção de aplicações escaláveis e de alta performance.
Docker: Containerização para ambientes consistentes e isolados.
Swagger: Documentação interativa e auto-explicativa da API.
Redis: Cache de dados para alta performance e baixa latência.

### Autor

- LinkedIn: [JaimeMartins](https://www.linkedin.com/in/jaime-martins-de-oliveira/)
- GitHub: [JaimeMartins](https://github.com/jaimeMartinsOliva)