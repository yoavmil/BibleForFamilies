import { Component, Input, OnInit } from '@angular/core';

export interface CarouselItem {
  title?: string;
  content?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  @Input() contentHeight: string = "";
  
  public currIdx: number = 0;

  public nextItem() {
    this.setIdx((this.currIdx + 1) % this.items.length);
  }
  private setIdx(idx: number) {
    this.currIdx = idx;
  }
  public circleClicked(idx: number) {
    this.setIdx(idx);
  }
}
