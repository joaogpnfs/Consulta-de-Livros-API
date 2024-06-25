# API de Consulta de Livros

Este projeto consiste em uma API simples para consulta e gerenciamento de livros, desenvolvida em Node.js com TypeScript e utilizando o framework Express.
Além de uma interface de consulta, desenvolvida com React e JavaScript.

## Configuração do Projeto

### Pré-requisitos

Para executar este projeto, você precisará ter instalado:

- Node.js - v12.18.3 ou superior
- Express.js - v4.17.1 ou superior
- React - v17.0.2 ou superior (se aplicável)
- React DOM - v17.0.2 ou superior
- npm - v6.14.6 ou superior
- Axios - v0.21.1 ou superior
- cors - v2.8.5 ou superior

### Clonar o Repositório

Para começar, clone este repositório em sua máquina local:

```bash
git clone https://github.com/joaogpnfs/Consulta-de-Livros-API.git
cd Consulta-de-Livros-API
```

### Instalar Dependências

Instale as dependências do projeto utilizando npm:

```bash
npm install
```

## Executando a API

Para iniciar o servidor da API, execute o seguinte comando:

```bash
npm start
```
Para iniciar o frontend (se aplicável):

```bash
npm run start-client
```

## Testando a API

Você pode testar a API utilizando ferramentas como Insomnia, Postman ou simplesmente através de requisições HTTP.

- Endpoint POST para adicionar um novo livro:
POST http://localhost:3000/books

Body: {
"title": "Título do Livro",
"author": "Nome do Autor",
"publishedYear": 2023
}

- Endpoint GET para listar todos os livros:
GET http://localhost:3000/books

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
