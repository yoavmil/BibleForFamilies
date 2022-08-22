import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDataDto } from './LoginData.dto';
import UserDocument, { User } from './User.schema';
import { compareSync, genSalt, hash } from 'bcrypt';
import { UserDto } from './User.dto';

@Injectable()
export class AuthService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async login(credentials: LoginDataDto): Promise<UserDto> {
		const user = await this.userModel.findOne({ email: credentials.email });

		if (!user) {
			throw new BadRequestException("User doesn't exist");
		}

		const passwordMatch = compareSync(credentials.password, user.password);
		if (!passwordMatch) {
			throw new UnauthorizedException('Wrong password');
		}

		this.userModel
			.findByIdAndUpdate(user._id, {
				lastLoginDate: new Date(),
			})
			.exec();

		user.password = '';
		return user;
	}

	// async logout(userId: string, refreshToken: string): Promise<any> {
	// 	await this.tokenService.deleteRefreshToken(userId, refreshToken);
	// }

	async register(user: UserDto): Promise<UserDto> {
		const email = user.email;
		let exist;
		try {
			exist = await this.userModel.findOne({ email: email });
		} catch (error) {
			throw new InternalServerErrorException('Error while creating user');
		}

		if (exist) {
			throw new BadRequestException(`${email} already exists`);
		}

		user.lastLoginDate = user.signupDate = new Date();
		user.password = await this.hashPassword(user.password);
		const newUser = await this.userModel.create(user);
		return newUser;
	}

	protected async hashPassword(password: string): Promise<string> {
		const salt = await genSalt();
		const hashedPassword = await hash(password, salt);

		return hashedPassword;
	}
}
