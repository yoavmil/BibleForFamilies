import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDataDto } from './LoginData.dto';
import { LoginResponseDto } from './LoginResponse.dto';
import UserDocument, { User } from './User.schema';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    getUser(loginData: LoginDataDto): Promise<LoginResponseDto> {
        this.userModel.findOne({ email: loginData.email }).exec().then((user: User) => {
            if (!user) {
                return null;

            }

            // const res: LoginResponseDto = {
            //     userId: null,

            // };
            // return res;
        });

        return null;
    }
}
