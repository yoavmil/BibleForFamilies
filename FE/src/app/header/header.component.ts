import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private deviceService: DeviceDetectorService
  ) {}

  public get hasUser(): boolean {
    return this.authService.hasUser;
  }
  public get isMobile(): boolean {
    return this.deviceService.isMobile();
  }
}
