import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { TournamentDao, TournamentDocument } from "../persistence/schemas/tournament.schema";
import * as mongoose from 'mongoose'

@Injectable()
export class TournamentsRepository{
    constructor(@InjectModel(TournamentDao.name) private tournamentModel: mongoose.Model<TournamentDocument>) {}

    async get(id: string): Promise<TournamentDao>{
        return await this.tournamentModel.findById(id).exec()
    }

    async post(tournament: TournamentDao){
        const id = new mongoose.Types.ObjectId()
        tournament._id = id
        tournament.id = id.toString()
        const newTournament = new this.tournamentModel(tournament)
        return newTournament.save()
    }

}