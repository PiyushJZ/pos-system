# Point of Sale Monorepo

This is the monorepo for the point of sale system scaffolded using [turborepo](https://turbo.build)

## Getting Started

Switch to the correct node version.

```bash
  nvm use
```

Start with installing the turbo package globally.

```bash
  npm install turbo --global
```

Install all dependencies

```bash
  npm ci
```

### Build

To build all apps and packages, run the following command:

```bash
  npm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
  npm dev
```

## What's inside?

This project monorepo includes the following packages/apps:

### Apps and Packages

- `pos-client`: a [Nuxt](https://nuxt.com) app
- `pos-server`: a microservices architecture based server application
  - `pos-server/api-gateway`: a [NestJs](https://nestjs.com) app. An http(s) API gateway
  - `pos-server/auth-service`: a [NestJs](https://nestjs.com) app. Used for authentication/authorization
  - `pos-server/product-service`: a [NestJs](https://nestjs.com) app. Used for managing products
  - `pos-server/sale-service`: a [NestJs](https://nestjs.com) app. Used for managing sales
- `@lib/db`: database utilities
- `@lib/dto`: hold all the dto's to be used by the multiple server microservices
- `@lib/logger`: logging utility functions
- `@lib/utils`: utility functions to be used by both client and server

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).
