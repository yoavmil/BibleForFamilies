import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDataDto } from './LoginData.dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get()
	public async getUser(@Body() loginData: LoginDataDto) {
		return this.authService.getUser(loginData);
	}
}
