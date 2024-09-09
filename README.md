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
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
npm run dev
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
- `@lib/config`: common config
- `@lib/db`: database utilities
- `@lib/queue`: message queue for inter-service communication
- `@lib/tsconfig`: shared tsconfig
- `@lib/dto`: hold all the dto's to be used by the multiple server microservices
- `@lib/logger`: logging utility functions
- `@lib/utils`: utility functions to be used by both client and server

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Creating a new internal package

For creating a new internal package to be used across the apps, follow these steps:

1. Create a new folder inside packages and run `npm init -y`

```bash
cd packages
mkdir <new-package>
npm init -y
```

2. Edit the generated package.json file:

```json
{
  "name": "@lib/<package-name>",
  "version": "1.0.0",
  "publishConfig": {
    "access": "public"
  },
  "author": "<Your Name>",
  "license": "ISC",
  "description": "<Package Description>"
}
```

3. If the package is used to share simple json/js config/objects, then those files can be created in the same folder as the package.json and add an entry for files in it

```json
{
  "name": "@lib/<package-name>",
  "version": "1.0.0",
  "publishConfig": {
    "access": "public"
  },
  "files": ["./eslintrc.js"],
  "author": "<Your Name>",
  "license": "ISC",
  "description": "<Package Description>"
}
```
