export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || "your_user",
      password: process.env.DB_PASSWORD || "your_password",
      database: process.env.DB_NAME || "your_database",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  test: {
    client: "pg",
    connection: {
      host: process.env.TEST_DB_HOST || "localhost",
      port: Number(process.env.TEST_DB_PORT) || 5432,
      user: process.env.TEST_DB_USER || "your_user",
      password: process.env.TEST_DB_PASSWORD || "your_password",
      database: process.env.TEST_DB_NAME || "your_test_database",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.PROD_DB_HOST || "localhost",
      port: Number(process.env.PROD_DB_PORT) || 5432,
      user: process.env.PROD_DB_USER || "your_user",
      password: process.env.PROD_DB_PASSWORD || "your_password",
      database: process.env.PROD_DB_NAME || "your_prod_database",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.PROD_DB_HOST || "localhost",
      port: Number(process.env.PROD_DB_PORT) || 5432,
      user: process.env.PROD_DB_USER || "your_user",
      password: process.env.PROD_DB_PASSWORD || "your_password",
      database: process.env.PROD_DB_NAME || "your_prod_database",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};
