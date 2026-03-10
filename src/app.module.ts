import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quote.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({isGlobal: true}),
     MongooseModule.forRootAsync({
      inject:[ConfigService],
        useFactory: async (configService : ConfigService) =>({
          uri: configService.get<string>('MONGO_URI')
        })
     }),
    QuoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
