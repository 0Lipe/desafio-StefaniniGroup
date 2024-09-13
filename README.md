# ToDo List

## Sobre

Uma aplicação full stack de Lista de tarefas, nela você pode listar todas as tarefas, criar uma nova e pesquisar uma expecifica

- Node.js (v14 ou superior)
- Java (v22)

### Passos para Instalação

1. **Clone o Repositório:**

   ```bash
   https://github.com/0Lipe/desafioTecnico-0Lipe-2024.gitt
   ```


2. **Instale as Dependências:**

   ```bash
   npm install
   ```

3. **Configuração do Ambiente:**

   Crie um arquivo `.env` no projeto e adicione as seguintes variáveis de ambiente:

   ```dotenv
     SPRING_DATASOURCE_URL = jdbc:postgresql://localhost:5432/seu-banco-de-dados
     SPRING_DATASOURCE_USERNAME = usuario
     SPRING_DATASOURCE_PASSWORD = sua senha
   ```

4. **Inicie a Aplicação:**

   ```
   npm start
   ```



   ### Documentação da API REST

Endpoints

1. **Listar Tarefas**
   Método: GET
   URL: /todo
   Descrição: Recupera todas as tarefas.
   Exemplo de Resposta:
   json
   ```bash
   [
      {
         "id": 1,
         "title": "Comprar leite",
         "descricao": "Nova descrição"
         "status": "CONCLUIDO"
      },
      {
         "id": 2,
         "title": "Estudar programação",
         "descricao": "Nova descrição"
         "status": "EM_ANDAMENTO"
      }
   ]
   ```
2. **Criar uma Nova Tarefa**
   Método: POST
   URL: todo
   Descrição: Cria uma nova tarefa.
   Corpo da Requisição:
   json

   ```bash
      {
         "title": "Nova tarefa",
         "descricao": "Nova descrição"
         "status": "EM_ANDAMENTO"
      }
   ```

3. Buscar uma Tarefa Específica
   Método: GET
   URL: todo/{id}
   Descrição: Recupera uma tarefa específica pelo ID.
   Exemplo de Resposta:
   ```bash
      {
         "title": "Nova tarefa",
         "descricao": "Nova descrição"
         "completed": "EM_ANDAMENTO"
      }
   ```

4. Update de uma Tarefa Específica
   Método: PUT
   URL: todo/{id}
   Descrição: atualiza o status da tarefa atual
   Exemplo de Resposta:
   ```bash
      {
         "status": "EM_ANDAMENTO"
      }
   ```
5. Deletar uma Tarefa Específica
   Método: DELETE
   URL: todo/{id}
   Descrição: Deleta uma tarefa especifica
   Exemplo de Resposta:
   ```bash
      NO CONTENT
   ```
