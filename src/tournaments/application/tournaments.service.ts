import { Injectable } from "@nestjs/common";
import { Tournament, TournamentDocument } from "./schemas/tournament.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TournamentsService{
    constructor(@InjectModel(Tournament.name) private tournamentModel: Model<TournamentDocument>) {}

    async get(id: string): Promise<Tournament>{
        return await this.tournamentModel.findById(id).exec()
    }
}