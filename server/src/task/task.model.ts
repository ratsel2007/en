export class TaskModel {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  video?: string;
  music?: string;
  text?: string;
  codeLevel: string[];
  adress: string[];
  codeAnswer: string[];
  autoComplete?: boolean;
}
