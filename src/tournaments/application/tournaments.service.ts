import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import {TournamentDao, TournamentDocument } from "../persistence/schemas/tournament.schema";
import { TournamentsRepository } from "../persistence/tournaments.repository";
import { Tournament } from "./models/tournament.model";

@Injectable()
export class TournamentsService{
    constructor(private tournamentsRepository: TournamentsRepository) { }

    async get(id: string): Promise<Tournament>{
        const tournament: TournamentDao =  await this.tournamentsRepository.get(id)
        return this.mapTournamentDaoToTournament(tournament)
    }

    //async post(tournament)

    mapTournamentDaoToTournament(tournamentDao: TournamentDao): Tournament{
        const tournament: Tournament = new Tournament()
        tournament.id = tournamentDao.id
        tournament.name = tournamentDao.name
        tournament.participants = tournamentDao.participants
        tournament.phases = tournamentDao.phases
        return tournament
    }

}