import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './DTO/create-quotes.dto';
import { GetQuotesQueryDto } from './DTO/get-quotes-query.dto';
import { UpdateQuoteDto } from './DTO/update-quote.dto';

@Controller('quotes')
export class QuoteController {
    constructor(private readonly quoteService : QuoteService){}

    @Post()
    createQuote(@Body() createQuoteDto : CreateQuoteDto){
        return this.quoteService.createQuote(createQuoteDto)
    }

  @Get()
  findAllQuotes(@Query() query: GetQuotesQueryDto){
    return this.quoteService.getAllQuotes(query);
  }

  @Patch(':id')
  updateQuote(@Param('id') id: string, @Body() updateQuoteDto : UpdateQuoteDto){
    return this.quoteService.updateQuote(id, updateQuoteDto);
  }
    
}
