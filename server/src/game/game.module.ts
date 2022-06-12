import { Module } from '@nestjs/common';
import { GameController } from './game.controller';

@Module({})
export class GameModule {
  controllers: [GameController];
}
