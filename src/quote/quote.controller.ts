import { Body, Controller, Post } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './DTO/create-quotes.dto';

@Controller('quote')
export class QuoteController {
    constructor(private readonly quoteService : QuoteService){}

    @Post()
    createQuote(@Body() createQuoteDto : CreateQuoteDto){
        return this.quoteService.createQuote(createQuoteDto)
    }
}
