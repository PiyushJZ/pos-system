import type { Knex } from "knex";
import { CONFIG } from "@lib/config/common";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: CONFIG.DB.DB_NAME,
      user: CONFIG.DB.DB_USER,
      password: CONFIG.DB.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders",
    },
  },

  test: {
    client: "postgresql",
    connection: {
      database: CONFIG.DB.DB_NAME,
      user: CONFIG.DB.DB_USER,
      password: CONFIG.DB.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: CONFIG.DB.DB_NAME,
      user: CONFIG.DB.DB_USER,
      password: CONFIG.DB.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: CONFIG.DB.DB_NAME,
      user: CONFIG.DB.DB_USER,
      password: CONFIG.DB.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeders",
    },
  },
};

module.exports = config;
