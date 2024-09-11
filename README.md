# API Tasks

## Introdução

O projeto API Tasks é uma API RESTful para gerenciamento de tarefas, desenvolvida com Node.js, Express e Sequelize. O objetivo é criar uma API para gerenciar tarefas com operações de criação, atualização, listagem e exclusão, utilizando um banco de dados MySQL.

## Requisitos

* Node.js 14+
* MySQL 8+
* npm 6+

## Dependências

### Dependências Básicas

* `express`: Framework para criar o servidor e gerenciar rotas.
* `sequelize`: ORM para interação com o banco de dados MySQL.
* `mysql2`: Driver MySQL para Sequelize.
* `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.

### Instalação das Dependências

1. Execute o comando `npm install` para instalar as dependências.
2. Crie um arquivo `.env` com as variáveis de ambiente necessárias.

## Configuração

* Crie um arquivo `.env` com as seguintes variáveis:
 + `DB_HOST`: endereço do servidor MySQL
 + `DB_USER`: usuário do banco de dados
 + `DB_PASSWORD`: senha do banco de dados
 + `DB_NAME`: nome do banco de dados

## Exemplos de Uso

* Criar uma tarefa: `POST /tarefas/` com o corpo `{ titulo: 'Nova tarefa', descricao: 'Descrição da tarefa' }`
* Listar tarefas: `GET /tarefas/`

## Arquitetura

A API Tasks utiliza uma arquitetura de microserviços, com os seguintes componentes principais:

* Servidor: responsável por gerenciar as rotas e lidar com as requisições.
* Banco de dados: responsável por armazenar as tarefas.
* ORM: responsável por interagir com o banco de dados.

## Segurança

A API Tasks utiliza autenticação e autorização para garantir a segurança das tarefas. Além disso, utiliza criptografia para proteger as informações sensíveis.

## Testes

Para realizar testes no projeto, siga os seguintes passos:

1. Configure o ambiente de teste.
2. Escreva testes unitários e de integração.
3. Execute os testes.

## Deploy

Para realizar o deploy do projeto, siga os seguintes passos:

1. Configure o servidor.
2. Crie um container Docker.
3. Realize o deploy em um provedor de serviços em nuvem.

## Contribuição

Se você deseja contribuir com o projeto, por favor, faça um fork do repositório, crie uma nova branch para suas alterações.

## Licença

O projeto API Tasks é licenciado sob a licença MIT.

## Recursos Adicionais

* Documentação oficial de Node.js: <https://nodejs.org/en/docs/>
* Documentação oficial de Express: <https://expressjs.com/en/starter/installing.html>
* Documentação oficial de Sequelize: <https://sequelize.org/master/>
