import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

const user = 'BFF';
const pass = 'o4YNkHCJGkG1X80A';

@Module({
  imports: [
    CommentModule,
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${pass}@cluster0.ferojvs.mongodb.net/?retryWrites=true&w=majority`,
    ),
    AuthModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AppModule {}
