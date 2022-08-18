import { BadRequestException, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDataDto } from './LoginData.dto';
import { LoginResponseDto } from './LoginResponse.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	// copied from https://codesandbox.io/s/jhwwc?file=/src/auth/auth.controller.ts
	@Post('login')
	@HttpCode(200)
	@ApiResponse({ status: HttpStatus.OK, type: LoginResponseDto })
	@ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
	@ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
	async login(@Body() credentials: LoginDataDto): Promise<LoginResponseDto> {
		const loginResults = await this.authService.login(credentials);

		if (!loginResults) {
			throw new UnauthorizedException(
				'This email, password combination was not found',
			);
		}

		return loginResults;
	}
}
