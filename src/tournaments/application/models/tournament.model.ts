import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Tournament {
    id: string
    name: string
    participants: any[]
    phases: any[]
}