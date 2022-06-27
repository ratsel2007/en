import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface GameModel extends Base {}
export class GameModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  image: string;

  @prop()
  timeStart: Date;
}
