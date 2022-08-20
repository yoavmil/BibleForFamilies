import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	InternalServerErrorException,
	Post,
	UnauthorizedException,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDataDto } from './LoginData.dto';
import { LoginResponseDto } from './LoginResponse.dto';
import { UserDto } from './User.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	// learned from https://codesandbox.io/s/jhwwc?file=/src/auth/auth.controller.ts
	@Post('login')
	@HttpCode(200)
	@ApiResponse({ status: HttpStatus.OK, type: LoginResponseDto })
	@ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
	@ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
	async login(@Body() credentials: LoginDataDto): Promise<LoginResponseDto> {
		const loginResults = await this.authService.login(credentials);
		return loginResults;
	}

	@Post('register')
	@ApiResponse({ status: HttpStatus.CREATED, type: UserDto })
	@ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
	@ApiResponse({
		status: HttpStatus.INTERNAL_SERVER_ERROR,
		type: InternalServerErrorException,
	})
	async registerClient(@Body() userDto: UserDto): Promise<UserDto> {
		return await this.authService.register(userDto);
	}
}
