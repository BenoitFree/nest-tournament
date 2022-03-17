import { Module } from "@nestjs/common";

import { MongooseModule } from '@nestjs/mongoose'
import { TournamentsService } from "./application/tournaments.service";
import { TournamentDao, TournamentSchema } from "./persistence/schemas/tournament.schema";
import { TournamentsRepository } from "./persistence/tournaments.repository";
import { TournamentsController } from "./presentation/tournaments.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: TournamentDao.name, schema: TournamentSchema}])
    ],
    controllers: [
        TournamentsController
    ],
    providers: [
        TournamentsService,
        TournamentsRepository
    ]
})
export class TournamentsModule{
    
}