import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AnswerModel } from './answer.model';

@Module({
  providers: [AnswerService],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AnswerModel,
        schemaOptions: {
          collection: 'Answer',
        },
      },
    ]),
  ],
  controllers: [AnswerController],
})
export class AnswerModule {}
