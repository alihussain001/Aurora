import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './schema/quote.schema';
import { Model } from 'mongoose';
import { QuoteModule } from './quote.module';
import { CreateQuoteDto } from './DTO/create-quotes.dto';
import { GetQuotesQueryDto } from './DTO/get-quotes-query.dto';
import { UpdateQuoteDto } from './DTO/update-quote.dto';

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
    const filter : any = {}

    if(query.category){
      filter.category = query.category;
    }
    if(query.author){
      filter.author = query.author;
    }
    if(query.title){
      filter.title = query.title;
    }
    if(query.search){
      filter.$or = [
        {title: {$regex: query.search, $options: "i"}},
        {author: {$regex: query.search, $options: "i"}},
        {content: {$regex: query.search, $options: "i"}},
      ];
    }

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 5;

    const skip = (page - 1) * limit;

    return this.quoteModule
    .find(filter)
    .skip(skip)
    .limit(limit)
    .sort({creatdeAt: -1});
  }

  async updateQuote(id: string, updatedQuoteDto: UpdateQuoteDto){
    const updatedQuote = await this.quoteModule.findByIdAndUpdate(
      id,
      updatedQuoteDto,
      {new : true}
    );
    if(!updatedQuote){
      throw new NotFoundException("Quote not found!")
    };

    return updatedQuote;
  }
}
