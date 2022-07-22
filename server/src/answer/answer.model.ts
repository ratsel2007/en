import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
export { Types } from 'mongoose';

export interface AnswerModel extends Base {}

export class AnswerModel extends TimeStamps {
  @prop()
  teamId: Types.ObjectId;

  @prop()
  user: string;

  @prop()
  taskId: Types.ObjectId;

  @prop()
  answer: string;

  @prop({ default: false })
  right: boolean;
}
