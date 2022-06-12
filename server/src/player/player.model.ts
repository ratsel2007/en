import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface PlayerModel extends Base {}

export class PlayerModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  team: string;

  @prop()
  teamId: Types.ObjectId;
}
