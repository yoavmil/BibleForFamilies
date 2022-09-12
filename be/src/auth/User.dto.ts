/* WARNING!!! This file is auto-generated! Don't edit here! */
export class UserDto {
	_id: string;
	email: string;
	validated: boolean;
	password: string; // FE>BE: password, BE>FE: empty, DB: hash
	token: string;
	firstName: string;
	surname: string;
	bookmarkURL: string;
	signupDate: Date;
	lastLoginDate: Date;
};
