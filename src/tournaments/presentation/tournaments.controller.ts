import { Controller, Get, Inject, Param } from "@nestjs/common";
import { Tournament } from "./schemas/tournament.schema";
import { TournamentsService } from "./tournaments.service";

@Controller('tournaments')
export class TournamentsController{
    constructor(private tournamentsService: TournamentsService) { }

    @Get(':id')
    async getTournament(@Param('id')id: string): Promise<Tournament>{
        return await this.tournamentsService.get(id)
    }
}