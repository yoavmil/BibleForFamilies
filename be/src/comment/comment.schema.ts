/* WARNING!!! This file is auto-generated! Don't edit here! */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
type CommentDocument = Comment & Document;
export default CommentDocument;
@Schema()
export class Comment {
	@Prop()
	title: string;
	@Prop()
	content: string;
	@Prop()
	authorDisplayName: string;
	@Prop()
	date: Date;
	@Prop()
	url: string;
};
export const CommentSchema = SchemaFactory.createForClass(Comment);
