import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import knex from "knex";

@Module({
  providers: [
    {
      provide: "KnexConnection",
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const environment = process.env.NODE_ENV || "development";
        const knexConfig = require("../../knexfile")[environment];
        return knex(knexConfig);
      },
    },
  ],
  exports: ["KnexConnection"],
})
export class DatabaseModule {}
