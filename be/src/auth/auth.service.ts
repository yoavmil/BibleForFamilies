import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDataDto } from './LoginData.dto';
import { LoginResponseDto } from './LoginResponse.dto';
import UserDocument, { User } from './User.schema';
import bcrypt from 'bcrypt';
import { JwtPayload } from './token/jwt-payload';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async login(credentials: LoginDataDto): Promise<LoginResponseDto> {
        const user = await this.userModel.findOne({ email: credentials.email });

        if (!user) {
            return Promise.resolve(null);
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.hash);

        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }
        this.userModel.findByIdAndUpdate(user._id, {
            lastLoginDate: new Date()
        }).exec();
        
        const payload: JwtPayload = {
            sub: user._id
        };

        const loginResponse: LoginResponseDto = await this.tokenService.createAccessToken(
            payload,
          );

        const loginResponse: LoginResponseVm =
            await this.tokenService.createAccessToken(payload);

        // We save the user's refresh token
        const tokenContent = {
            userId: loginResults.id,
            clientId: credentials.clientId,
            ipAddress,
        };
        const refresh = await this.tokenService.createRefreshToken(tokenContent);

        loginResponse.refreshToken = refresh;

        return loginResponse;
    }
}
