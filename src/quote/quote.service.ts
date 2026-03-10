import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';
import { QuoteModule } from './quote.module';
import { CreateQuoteDto } from './DTO/create-quotes.dto';

@Injectable()
export class QuoteService {
    constructor(
        @InjectModel(Quote.name)
        private quoteModule : Model<QuoteModule>,
    ){}

    async createQuote(createQuoteDto : CreateQuoteDto){
        return this.quoteModule.create(createQuoteDto);
    }

}
