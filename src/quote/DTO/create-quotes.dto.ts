import { IsArray, IsString } from "class-validator";

export class CreateQuoteDto{
    @IsString()
    title!: string;

    @IsString()
    content!: string;

    @IsString()
    author!:string;

    @IsString()
    category!: string
}