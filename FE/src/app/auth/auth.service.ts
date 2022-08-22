import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDataDto } from './LoginData.dto';
import { UserDto } from './User.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: UserDto;
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

  login(email: string, password: string) {
    const loginData: LoginDataDto = {
      email: email,
      password: password,
    };
    this.http.post<UserDto>(`${this.beURL}/auth/login`, loginData).subscribe({
      next: (user: UserDto) => {
        this.user = user;
      },
      error: (err: HttpErrorResponse) => {
        throw err;
      },
    });
  }
}
