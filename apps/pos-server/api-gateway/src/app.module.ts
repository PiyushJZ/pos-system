import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NatsClientModule } from '@lib/q';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [NatsClientModule, AuthModule, ProductModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
