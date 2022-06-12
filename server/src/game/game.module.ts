import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { GameController } from './game.controller';
import { GameModel } from './game.model';

@Module({
  controllers: [GameController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GameModel,
        schemaOptions: {
          collection: 'Game',
        },
      },
    ]),
  ],
})
export class GameModule {}
