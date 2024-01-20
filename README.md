# Arquitetura Hexagonal

### Este repositório tem como intuito apresentar o projeto finalizado (etapa do Backend) que foi feito durante o Curso da Udemy [Arquitetura Limpa e Hexagonal](https://www.udemy.com/course/arquitetura-limpa-e-hexagonal/) da escola [Cod3r Cursos Online](https://www.cod3r.com.br/) 

O curso abordou perfeitamente os contextos da Arquitetura Hexagonal (mais conhecido como [PORTS and ADAPTERS](https://medium.com/tableless/desvendando-a-arquitetura-hexagonal-52c56f8824c)) onde o mesmo utilizou melhores práticas de arquitetura de software para sistemas escaláveis, modulares e de alta qualidade!

Durante a segunda etapa foram aplicados alguns novos pontos crusciais com relação a qualquer aplicação que irá ser direcionada para um usuário comum, como:
- Autenticação;
- Envio de senhas encriptadas para o banco de dados;
- Token JWT (para manter usuário logado por determinado tempo);

## 🚀💻 Technologies utilizadas

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript) 
![Nodejs](https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js) 
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## _Bibliotecas utilizadas_
* pg-promise
* Bcrypt
* Dotenv
* Jsonwebtoken
* uuid

For installing libraries...

```sh
Install the library as a development dependency
npm install -D @types/pgpromise
npm install -D @types/bcrypt
npm install -D @types/jsonwebtoken


Install libraries for development
npm install bcrypt
npm install dotenv
npm install jsonwebtoken
npm install pg-promise
npm install uuid

or

npm install bcrypt dotenv jsonwebtoken pg uuid
```