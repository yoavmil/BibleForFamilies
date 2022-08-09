/* WARNING!!! This file is auto-generated! Don't edit here! */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
type UserDocument = User & Document;
export default UserDocument;
@Schema()
export class User {
	@Prop()
	email: string;
	@Prop()
	passwordHash: string;
	@Prop()
	firstName: string;
	@Prop()
	surname: string;
	@Prop()
	bookmarkURL: string;
	@Prop()
	signupDate: number;
	@Prop()
	lastLoginDate: number;
};
export const UserSchema = SchemaFactory.createForClass(User);
