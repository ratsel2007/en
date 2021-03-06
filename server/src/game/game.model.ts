import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface GameModel extends Base {}
export class GameModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  image: string;

  @prop()
  text: string;

  @prop()
  timeStart: Date;

  @prop()
  gameAuthor: string;

  @prop({ default: false })
  isOpen: false;

  @prop({ type: () => [String] })
  teamInGame: string[];
}
