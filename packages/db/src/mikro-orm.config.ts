import { MikroOrmModuleSyncOptions } from "@mikro-orm/nestjs";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  driver: PostgreSqlDriver,
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || "pos",
  password: process.env.DB_PASSWORD || "pos",
  dbName: process.env.DB_NAME || "posdb",
  entities: ["./dist/entities"],
  entitiesTs: ["./src/entities"],
  debug: process.env.NODE_ENV !== "production",
};

export default mikroOrmConfig;
