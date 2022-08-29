import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'FE';

  private dynamicShadow = false;
  // change mat-card box shadows dynamically by mouse position
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.dynamicShadow) return;
    let x = (e.x / screen.width) * 2 - 1;
    let y = (e.y / screen.height) * 2 - 1;

    // from https://www.toptal.com/front-end/dynamic-css-with-custom-properties
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--bs-x', `${-x}rem`);
    bodyStyles.setProperty('--bs-y', `${-y}rem`);
  }
}
