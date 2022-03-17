import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'

@Schema({collection: 'tournaments'})
export class TournamentDao{
    @Prop()
    _id: mongoose.Types.ObjectId

    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    participants: any[]

    @Prop()
    phases: any[]
}

export type TournamentDocument = TournamentDao & Document

export const TournamentSchema = SchemaFactory.createForClass(TournamentDao)