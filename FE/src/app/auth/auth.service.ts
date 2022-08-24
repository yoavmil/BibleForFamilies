import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoginDataDto } from './LoginData.dto';
import { UserDto } from './User.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user?: UserDto;
  get hasUser(): boolean {
    return !!this.user;
  }
  public isMe(id: string): boolean {
    return this.hasUser && this.user!._id == id;
  }
  private beURL = 'http://localhost:3001';

  register(user: UserDto) {
    this.http.post<UserDto>(`${this.beURL}/auth/register`, user).subscribe({
      next: (acceptedUser: UserDto) => {
        console.dir(acceptedUser);
      },
      error: (err: HttpErrorResponse) => {
        throw err;
      },
    });
  }

  constructor(private http: HttpClient) {}

  async login(email: string, password: string) {
    const loginData: LoginDataDto = {
      email: email,
      password: password,
    };
    this.user = await firstValueFrom(
      this.http.post<UserDto>(`${this.beURL}/auth/login`, loginData)
    );
  }

  async logout() {
    delete this.user;
  }
}
