import { Component, Input } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BookData, Chapter } from '../book-data';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  constructor(private deviceService: DeviceDetectorService) { }

  @Input() content: BookData;

  public get chapter(): Chapter { return this.content.chapters[this.content.active]; }

  public get isMobile(): boolean {
    return this.deviceService.isMobile();
  }
}
