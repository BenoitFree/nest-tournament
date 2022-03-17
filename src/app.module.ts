import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsModule } from './tournaments/tournaments.module';
import { MongooseModule } from '@nestjs/mongoose'

const  mongoAtlasUri = "mongodb+srv://user:root@tournament.bo9w2.mongodb.net/my_tournament?retryWrites=true&w=majority";

@Module({
  imports: [
      MongooseModule.forRoot(mongoAtlasUri),
      TournamentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
