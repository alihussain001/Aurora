import { IsOptional, IsString } from "class-validator";

export class UpdateQuoteDto{

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsString()
    category?: string;
}

