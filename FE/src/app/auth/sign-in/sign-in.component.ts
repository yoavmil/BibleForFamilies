import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserDto } from '../User.dto';
import labels from './labels.json';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public labels = labels;
  form: FormControl = new FormControl('');
  isLoading = false;

  constructor(public authService: AuthService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    // @ts-ignore
    const user: UserDto = {
      email: form.value.email,
      password: form.value.password,
      firstName: form.value.firstName,
      surname: form.value.surname,
    };
    this.authService.register(user);
  }
  ngOnInit(): void {}
}
