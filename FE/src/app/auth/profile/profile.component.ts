import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import labels from './labels.json';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public labels = labels;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.hasUser) this.router.navigate(['/']);
  }

  public get title(): string {
    return `${this.labels.hi}, ${this.authService.user!.firstName} ${
      this.authService.user!.surname
    }!`;
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
