import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './DTO/create-quotes.dto';
import { GetQuotesQueryDto } from './DTO/get-quotes-query.dto';

@Controller('quotes')
export class QuoteController {
    constructor(private readonly quoteService : QuoteService){}

    @Post()
    createQuote(@Body() createQuoteDto : CreateQuoteDto){
        return this.quoteService.createQuote(createQuoteDto)
    }

  @Get()
  findAllQuotes(@Query() query: GetQuotesQueryDto){
    return this.quoteService.findAllQuotes(query);
  }
    
}
