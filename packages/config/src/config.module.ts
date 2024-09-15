import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { config, envValidationSchema } from "./config";

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: true,
      load: [config],
      validate: (config) => {
        const parsedConfig = envValidationSchema.safeParse(config);
        if (!parsedConfig.success) {
          console.error(
            "❌ Invalid environment variables:",
            parsedConfig.error.format()
          );
          throw new Error("Invalid environment variables");
        }
        return parsedConfig.data;
      },
    }),
  ],
})
export class ConfigModule {}
