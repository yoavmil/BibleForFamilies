import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import labels from './labels.json';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public labels = labels;
  form: FormControl = new FormControl('');
  isLoading = false;

  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    // this.isLoading = true;
    // this.authService.login(form.value.email, form.value.password);
  }

  onSignIn(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    // this.isLoading = true;
    // this.authService.login(form.value.email, form.value.password);
  }

  ngOnInit(): void {
  }

}
