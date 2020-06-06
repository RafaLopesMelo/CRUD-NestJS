<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center"> 
  Um framework progressivo para construir aplicações server-side eficientes e escaláveis, muito inspirado no <a           href="https://angular.io" target="blank">Angular</a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Introdução

Esta é uma aplicação com um simples CRUD dentro do framework NestJS, o banco de dados utilizado é o SQLite3 e para manpulá-lo utilizei o TypeORM. O Nest possui fortes influências do Angular, trabalha principalmente com TypeScript e utiliza Decorators para a maioria de suas funcionalidades.

 > [Decorators](https://nandovieira.com.br/design-patterns-no-javascript-decorator) = Mecanismo que permite estender o comportamento de um objeto durante o runtime.
 
O processo de criação de sistemas é bem facilitado, já que o Nest possui um CLI que monta a estrutura de pastas para o desenvolvedor, assim como também pode criar e fazer a importação e exportação automática de Controllers, Services ou Modules, por exemplo.

Em relação ao roteamento, nada de muito novo. O Nest abusa de Decorators juntamente com classes, que, à primeira vista, assutam, mas na verdade são grandes facilitadores. Por baixo dos panos é utilizado Express como padrão para a grande parte das funcionalidades relacionadas à HTTP do framework, apesar de ser possível utilizar Fastify como base também.

A integração com o TypeORM é bastante otimizada e acontece de forma bastante natural e prática, visto que o Nest posui uma biblioteca facilitadora para trabalhar com este ORM. Clique [aqui](https://github.com/nestjs/typeorm) para ver.

## Intalação

Basta instalar as dependências do projeto: 

```bash
$ npm install
```

## Rodando o App

```bash
# Em desenvolvimento
$ npm run start

# Modo Watch 
$ npm run start:dev

# Em produção
$ npm run start:prod
```

## Fique atualizado

Abaixo estão as possíveis formas de sempre se manter atualizado em relação às novidades do NestJS.

- Autor - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

 Nest possui a licença MIT
 
## Conhecimentos Adquiridos:

- Maior contato e aprendizado com o TypeScript
- Entendimento de conceitos como Constructor e Decorators
- Uso do TypeORM
