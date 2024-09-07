import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NatsClientModule } from '@lib/queue';
import { DatabaseModule } from '@lib/db';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [
    NatsClientModule,
    DatabaseModule,
    AuthModule,
    ProductModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
