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
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async login(credentials: LoginDataDto): Promise<UserDto> {
		let user: UserDto;
		if (!!credentials.token && credentials.token != '') {
			user = await this.verifyToken(credentials.token);

			if (!user) {
				throw new BadRequestException('Token invalid');
			}
		} else {
			user = await this.userModel.findOne({ email: credentials.email });

			if (!user) {
				throw new BadRequestException("User doesn't exist");
			}

			const passwordMatch = compareSync(credentials.password, user.password);
			if (!passwordMatch) {
				throw new UnauthorizedException('Wrong password');
			}
		}

		this.userModel
			.findByIdAndUpdate(user._id, {
				lastLoginDate: new Date(),
			})
			.exec();

		user.password = '';
		user.token = this.createToken(user);
		return user;
	}

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
		delete user.token; // no need to save the token
		let newUser = await this.userModel.create(user);
		newUser.token = this.createToken(newUser);
		return newUser;
	}

	protected async hashPassword(password: string): Promise<string> {
		const salt = await genSalt();
		const hashedPassword = await hash(password, salt);

		return hashedPassword;
	}

	private jwtSecret = 'bff_sectet_jwt';
	private createToken(user: UserDto) {
		return sign({ email: user.email, userId: user._id }, this.jwtSecret);
	}
	private async verifyToken(token: string): Promise<UserDto> {
		const jwtPayload: { email: string; userId: string; iat: number } = verify(
			token,
			this.jwtSecret,
		) as any;

		let user = await this.userModel.findById(jwtPayload.userId);
		if (user.email == jwtPayload.email) return user;
		return null;
	}
}
