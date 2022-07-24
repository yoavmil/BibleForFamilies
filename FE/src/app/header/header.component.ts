import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private deviceService: DeviceDetectorService) { }

  public get hasUser(): boolean { return this.userService.hasUser; }
  public get isMobile(): boolean {
    return this.deviceService.isMobile();
  }
}
