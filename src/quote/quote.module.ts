import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { Quote, QuoteSchema } from './schema/quote.schema';

@Module({
  imports:[ 
    MongooseModule.forFeature([{name: Quote.name, schema: QuoteSchema}])
  ],
  controllers: [QuoteController],
  providers: [QuoteService]
})
export class QuoteModule {}
