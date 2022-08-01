import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type CommentDocument = Comment & Document;
export default CommentDocument;

@Schema()
export class Comment {
  @Prop()
  content: string;

  @Prop()
  authorID: string;

  @Prop()
  date: Date;

  // TODO author
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
