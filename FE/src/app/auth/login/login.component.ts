import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import labels from './labels.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public labels = labels;
  form: FormControl = new FormControl('');
  isLoading = false;
  wrongPassword = false;
  wrongEmail = false;
  showPassword = false;

  constructor(public authService: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.wrongPassword = false;
    this.wrongEmail = false;

    this.authService
      .login(form.value.email, form.value.password)
      .then(() => (this.isLoading = false))
      .catch((err) => {
        this.isLoading = false;
        this.wrongPassword = err.statusText == 'Unauthorized';
        this.wrongEmail = err.statusText == 'Bad Request';
      });
  }

  newUser() {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {}
}
