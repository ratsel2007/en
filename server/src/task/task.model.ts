import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface TaskModel extends Base {}

export class TaskModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  description?: string;

  @prop()
  image?: string;

  @prop()
  video?: string;

  @prop()
  music?: string;

  @prop()
  text?: string;

  @prop({ type: () => [String] })
  codeLevel: string[];

  @prop({ type: () => [String] })
  codeDescription: string[];

  @prop({ type: () => [String] })
  address: string[];

  @prop({ type: () => [String] })
  codeAnswer: string[];

  @prop()
  hint1: string;

  @prop()
  hint2: string;

  @prop()
  hint3: string;

  @prop()
  autoComplete?: boolean;

  @prop()
  gameId: Types.ObjectId;
}
