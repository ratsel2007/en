import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export interface AnswerModel extends Base {}

export class AnswerModel extends TimeStamps {
  @prop()
  team: string;

  @prop()
  user: string;

  @prop()
  numberTask: number;

  @prop()
  answer: string;

  @prop()
  date: Date;

  @prop({ default: false })
  right: boolean;
}
