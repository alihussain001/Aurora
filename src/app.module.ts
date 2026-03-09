import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quote.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('MONGO_URL') ,
    QuoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
