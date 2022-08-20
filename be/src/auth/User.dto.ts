/* WARNING!!! This file is auto-generated! Don't edit here! */
export class UserDto {
	_id: number;
	email: string;
	validated: boolean;
	password: string; // FE>BE: password, BE>FE: empty, DB: hash
	firstName: string;
	surname: string;
	bookmarkURL: string;
	signupDate: Date;
	lastLoginDate: Date;
};
