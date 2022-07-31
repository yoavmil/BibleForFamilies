import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BookData, Chapter } from '../book-data';
import { Marked } from '@ts-stack/markdown';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent {
  constructor(
    private deviceService: DeviceDetectorService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  @Input() content: BookData;

  public get chapter(): Chapter {
    let idxString = this.activeRoute.snapshot.paramMap.get('id');
    if (!idxString) idxString = '0';
    let idx = parseInt(idxString);
    return this.content.chapters[idx];
  }

  public get isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  public indexItemClicked(i: number) {
    const base = this.activeRoute.snapshot.url[0].path;
    this.router.navigate([base, `${i}`]);
  }

  public process(md: string): string {
    return Marked.parse(md);
  }

  public sanitize(htmlText: string) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlText);
  }
}
