<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  <p align="center"> Um framework progressivo para construir aplicações server-side eficientes e escaláveis, muito inspirado no <a href="https://angular.io" target="blank">Angular</a></p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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
