import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NatsClientModule } from '@lib/queue';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { ConfigModule } from '@lib/config';

@Module({
  imports: [
    ConfigModule,
    NatsClientModule,
    AuthModule,
    ProductModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
