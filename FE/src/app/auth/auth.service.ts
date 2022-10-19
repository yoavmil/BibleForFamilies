import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoginDataDto } from './LoginData.dto';
import { UserDto } from './User.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.getUserFromLocalStorage();
  }

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
        this.onLogin((this.user = acceptedUser));
        console.log('accepted user:');
        console.dir(acceptedUser);
      },
      error: (err: HttpErrorResponse) => {
        throw err;
      },
    });
  }

  async login(email: string, password: string) {
    const loginData: LoginDataDto = {
      email: email,
      password: password,
    };
    await this.getUser(loginData);
  }

  private async getUser(loginData: LoginDataDto) {
    this.user = await firstValueFrom(
      this.http.post<UserDto>(`${this.beURL}/auth/login`, loginData)
    );
    this.onLogin(this.user);
  }

  private getUserFromLocalStorage() {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return;
    const loginData: LoginDataDto = {
      token: token,
    };
    this.getUser(loginData);
  }

  private onLogin(user: UserDto) {
    localStorage.setItem(this.tokenKey, user.token);
  }

  private tokenKey = 'token';
  async logout() {
    localStorage.removeItem(this.tokenKey);
    delete this.user;
  }
}
