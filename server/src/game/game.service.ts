import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { GameModel } from './game.model';
import { CreateGameDto, PatchGameDto } from './dto/create-game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(GameModel) private readonly gameModel: ModelType<GameModel>,
  ) {}

  async getGame(): Promise<DocumentType<GameModel>[]> {
    return this.gameModel.find().exec();
  }

  async createGame(dto: CreateGameDto): Promise<DocumentType<GameModel>> {
    return this.gameModel.create(dto);
  }

  async patchGame(
    id: string,
    dto: PatchGameDto,
  ): Promise<DocumentType<GameModel> | null> {
    return this.gameModel.findByIdAndUpdate(id, dto).exec();
  }

  async deleteGame(id: string): Promise<DocumentType<GameModel> | null> {
    return this.gameModel.findByIdAndDelete(id).exec();
  }
}
