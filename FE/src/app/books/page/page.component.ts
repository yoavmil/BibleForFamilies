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
    let idString = this.activeRoute.snapshot.paramMap.get('id');
    if (!idString) idString = '0';
    let id = parseInt(idString);
    const result = this.content.chapters.find((c) => c.id == id);
    if (!result) {
      this.indexItemClicked(0); // navigates to another page
      return this.content.chapters[0]; // this code doesn't happen
    }
    return result;
  }

  public get isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  public indexItemClicked(i: number) {
    const base = this.activeRoute.snapshot.url[0].path;
    const id = this.content.chapters[i].id;
    this.router.navigate([base, `${id}`]);
  }

  public process(md: string): string {
    return Marked.parse(md);
  }

  public sanitize(htmlText: string) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlText);
  }
}
