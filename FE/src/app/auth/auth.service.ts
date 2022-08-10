import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    // const authData: AuthData = { email: email, password: password };
    // this.http
    //   .post<{ token: string; expiresIn: number }>(
    //     "http://localhost:3000/api/user/login",
    //     authData
    //   )
    //   .subscribe(response => {
    //     const token = response.token;
    //     this.token = token;
    //     if (token) {
    //       const expiresInDuration = response.expiresIn;
    //       this.setAuthTimer(expiresInDuration);
    //       this.isAuthenticated = true;
    //       this.authStatusListener.next(true);
    //       const now = new Date();
    //       const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
    //       console.log(expirationDate);
    //       this.saveAuthData(token, expirationDate);
    //       this.router.navigate(["/"]);
    //     }
    //   });
  }
}
