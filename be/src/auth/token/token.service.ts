import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from '../LoginResponse.dto';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class TokenService {
	private jwtKey: string = 'this_is_the_jwt_key';
	private expiresInDefault: number = 60 * 60; // 1 hour
	private jwtOptions = { expiresIn: this.expiresInDefault };

    // TODO copy from here
    // https://codesandbox.io/s/jhwwc?file=/src/auth/token/token.service.ts
	async createAccessToken(payload: JwtPayload): Promise<LoginResponseDto> {
		// const options = this.jwtOptions;
		// // Generate unique id for this token
		// options.jwtid = uuid();
		// const signedPayload = sign(payload, this.jwtKey, options);
		// const token: LoginResponse = {
		// 	accessToken: signedPayload,
		// 	expiresIn: expires,
		// };

		// return this.mapperService.map<LoginResponseVm>(
		// 	token,
		// 	LoginResponseVm.name,
		// 	LoginResponse.name,
		// );
		return null; // to compile
	}
}
