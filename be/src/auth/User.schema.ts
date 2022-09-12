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
	validated: boolean;
	@Prop()
	password: string; // FE>BE: password, BE>FE: empty, DB: hash
	@Prop()
	token: string;
	@Prop()
	firstName: string;
	@Prop()
	surname: string;
	@Prop()
	bookmarkURL: string;
	@Prop()
	signupDate: Date;
	@Prop()
	lastLoginDate: Date;
};
export const UserSchema = SchemaFactory.createForClass(User);
