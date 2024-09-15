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

###   **Criar uma tarefa**:
    
   -   **Método**: `POST`
   -   **Rota**: `/tarefas/`
   -   **Corpo**:

        `{
          "titulo": "Nova tarefa",
          "descricao": "Descrição da tarefa"
        }` 
        
   -   **Descrição**: Cria uma nova tarefa.

###   **Listar todas as tarefas**:
    
   -   **Método**: `GET`
   -   **Rota**: `/tarefas/`
   -   **Descrição**: Retorna uma lista de todas as tarefas.

###   **Obter uma tarefa por ID**:
    
   -   **Método**: `GET`
   -   **Rota**: `/tarefas/:id`
   -   **Parâmetros**: `:id` - ID da tarefa
   -   **Descrição**: Retorna os detalhes de uma tarefa específica com base no ID fornecido.

###   **Atualizar uma tarefa**:
    
   -   **Método**: `PUT`
   -   **Rota**: `/tarefas/:id`
   -   **Parâmetros**: `:id` - ID da tarefa
   -   **Corpo**:

        `{
          "titulo": "Título atualizado",
          "descricao": "Descrição atualizada"
        }` 
        
   -   **Descrição**: Atualiza os dados de uma tarefa específica.

###  **Marcar uma tarefa como concluída**:
    
   -   **Método**: `PUT`
   -   **Rota**: `/tarefas/concluida/:id`
   -   **Parâmetros**: `:id` - ID da tarefa
   -   **Descrição**: Marca uma tarefa como concluída.

###   **Obter várias tarefas por IDs**:
    
   -   **Método**: `POST`
   -   **Rota**: `/tarefas/byIds`
   -   **Corpo**:
        
        `{
          "ids": [1, 2, 3]
        }` 
        
   -   **Descrição**: Retorna uma lista de tarefas com base nos IDs fornecidos no corpo da requisição.

###  **Excluir uma tarefa**:
    
   -   **Método**: `DELETE`
   -   **Rota**: `/tarefas/:id`
   -   **Parâmetros**: `:id` - ID da tarefa
   -   **Descrição**: Exclui uma tarefa específica com base no ID fornecido.

###  Excluir várias tarefas
  
  -   **Método**: `DELETE`
  -   **Rota**: `/tarefas/`
  -   **Corpo**:
        
        `{
          "ids": [1, 2, 3]
        }` 
        
-   **Descrição**: Exclui várias tarefas com base nos IDs fornecidos no corpo da requisição.
### Atualizar uma tarefa (edição específica)

-   **Método**: `PUT`
-   **Rota**: `/tarefas/edicao/:id`
-   **Parâmetros**:
    -   `:id` - ID da tarefa
-   **Corpo**:

    `{
      "titulo": "Título editado",
      "descricao": "Descrição editada"
    }` 
    
-   **Descrição**: Atualiza os dados de uma tarefa específica com base no ID fornecido, similar à atualização geral.

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
