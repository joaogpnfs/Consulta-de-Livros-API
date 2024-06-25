# API de Consulta de Livros

Este projeto consiste em uma API simples para consulta e gerenciamento de livros, desenvolvida em Node.js com TypeScript e utilizando o framework Express.
Além de uma interface de consulta, desenvolvida com React e JavaScript.

## Configuração do Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu sistema:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- React

### Clonar o Repositório

Para começar, clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
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
