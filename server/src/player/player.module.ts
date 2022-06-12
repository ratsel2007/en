import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';

@Module({})
export class PlayerModule {
  controllers: [PlayerController];
}
