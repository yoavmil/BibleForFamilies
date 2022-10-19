import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import labels from './labels.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public labels = labels;
  form: UntypedFormControl = new UntypedFormControl('');
  isLoading = false;
  wrongPassword = false;
  wrongEmail = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.wrongPassword = false;
    this.wrongEmail = false;

    this.authService
      .login(form.value.email, form.value.password)
      .then(() => {
        this.isLoading = false;
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.isLoading = false;
        this.wrongPassword = err.statusText == 'Unauthorized';
        this.wrongEmail = err.statusText == 'Bad Request';
      });
  }

  newUser() {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      console.dir(user);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
