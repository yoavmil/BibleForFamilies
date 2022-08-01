import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';

const user = 'BFF';
const pass = 'o4YNkHCJGkG1X80A';

@Module({
  imports: [
    CommentModule,
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${pass}@cluster0.ferojvs.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
})
export class AppModule {}
