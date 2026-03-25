import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuoteDocument = Quote & Document;

@Schema({timestamps: true})
export class Quote{
    @Prop()
    title!: string;

    @Prop()
    content!: string;
    
    @Prop()
    author!: string;

    @Prop()
    category!: string

}

export const QuoteSchema = SchemaFactory.createForClass(Quote);