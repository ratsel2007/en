import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface TeamModel extends Base {}

export class TeamModel extends TimeStamps {
  @prop()
  title: string;

  @prop({ type: () => [String] })
  players: string[];

  @prop()
  progressInGame: number;
}
