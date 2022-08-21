import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDataDto } from './LoginData.dto';
import { LoginResponseDto } from './LoginResponse.dto';
import UserDocument, { User } from './User.schema';
import bcrypt, { genSalt, hash } from 'bcrypt';
import { JwtPayload } from './token/jwt-payload';
import { UserDto } from './User.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>, // @InjectModel(TokenService.name) private tokenService: TokenService,
	) {}

	async login(credentials: LoginDataDto): Promise<LoginResponseDto> {
		const user = await this.userModel.findOne({ email: credentials.email });

		if (!user) {
			throw new BadRequestException("User doesn't exist");
		}

		const hashed = await this.hashPassword(credentials.password);
		console.log(
			`found user ${user} ${credentials.password} ${user.password} ${hashed}`,
		);
		const passwordMatch = hashed == user.password;
		console.log(`passwordMatch ${passwordMatch}`);
		if (!passwordMatch) {
			console.log(`password missmatch`);
			throw new UnauthorizedException('Wrong password');
		}

		this.userModel
			.findByIdAndUpdate(user._id, {
				lastLoginDate: new Date(),
			})
			.exec();

		const payload: JwtPayload = {
			sub: user._id,
		};

		let loginResponse: LoginResponseDto = {
			expiresIn: 60,
			token: "TODO this isn't a real token",
			userId: user._id,
		}; // TODO replace with await this.tokenService.createAccessToken(payload);
		console.log(`found user ${user._id}`);
		return loginResponse;
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
		const salt = await genSalt(12);
		const hashedPassword = await hash(password, salt);

		return hashedPassword;
	}
}
