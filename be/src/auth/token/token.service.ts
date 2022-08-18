import { Injectable } from '@nestjs/common';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class TokenService {
    private jwtKey: string = "this_is_the_jwt_key";
    private expiresInDefault: number = 60 * 60; // 1 hour
    private jwtOptions = { expiresIn: this.expiresInDefault };
    async createAccessToken(
        payload: JwtPayload,
        expires = this.expiresInDefault,
    ): Promise<LoginResponseVm> {
        // If expires is negative it means that token should not expire
        const options = this.jwtOptions;
        expires > 0 ? (options.expiresIn = expires) : delete options.expiresIn;
        // Generate unique id for this token
        options.jwtid = uuid();
        const signedPayload = sign(payload, this.jwtKey, options);
        const token: LoginResponse = {
            accessToken: signedPayload,
            expiresIn: expires,
        };

        return this.mapperService.map<LoginResponseVm>(
            token,
            LoginResponseVm.name,
            LoginResponse.name,
        );
    }

}
