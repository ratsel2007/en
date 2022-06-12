import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface GameModel extends Base {}
export class GameModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  timeStart: Date;
}
