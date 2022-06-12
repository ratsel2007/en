import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PlayerController } from './player.controller';
import { PlayerModel } from './player.model';

@Module({
  controllers: [PlayerController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: PlayerModel,
        schemaOptions: {
          collection: 'Player',
        },
      },
    ]),
  ],
})
export class PlayerModule {}
