import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tournament{
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    participants: any[]

    @Prop()
    phases: any[]
}

export type TournamentDocument = Tournament & Document

export const TournamentSchema = SchemaFactory.createForClass(Tournament)