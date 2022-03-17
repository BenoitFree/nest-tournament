import { Controller, Get, Inject, Param } from "@nestjs/common";
import { Tournament } from "../application/models/tournament.model";
import { TournamentsService } from "../application/tournaments.service";
import { TournamentDto } from "./dtos/tournament.dto";

@Controller('tournaments')
export class TournamentsController{
    constructor(private tournamentsService: TournamentsService) { }

    @Get(':id')
    async getTournament(@Param('id')id: string): Promise<TournamentDto>{
        const tournament: Tournament = await this.tournamentsService.get(id)
        return this.mapTournamentToTournamentDto(tournament)
    }

    mapTournamentToTournamentDto(tournament: Tournament): TournamentDto{
        const tournamentDto: TournamentDto = new TournamentDto()
        tournamentDto.id = tournament.id
        tournamentDto.name = tournament.name
        tournamentDto.participants = tournament.participants
        tournamentDto.phases = tournament.phases
        return tournamentDto
    }
}