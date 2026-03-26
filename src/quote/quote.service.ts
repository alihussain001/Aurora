import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';
import { QuoteModule } from './quote.module';
import { CreateQuoteDto } from './DTO/create-quotes.dto';
import { GetQuotesQueryDto } from './DTO/get-quotes-query.dto';
import { filter } from 'rxjs';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name)
    private quoteModule: Model<QuoteModule>,
  ) {}

  async createQuote(createQuoteDto: CreateQuoteDto) {
    return this.quoteModule.create(createQuoteDto);
  }

  async getAllQuotes(query : GetQuotesQueryDto){
    const filter : any = {};

    if(query.category){
      filter.category = query.category
    }
    if(query.author){
      filter.author = query.author;
    }
    if(query.title){
      filter.title = query.title
    }
    if(query.search){
      filter.$or = [
        { title: {$regex: query.search, $options: "i"}},
        {author: {$regex: query.search, $options: "i"}},
        {category:{$regex: query.search, $options: "i"}}
      ];
    }else{
      throw new NotFoundException("Query not found")
    }
    return this.quoteModule.find(filter);
  }

}
