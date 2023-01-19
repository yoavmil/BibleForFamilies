import { Component } from '@angular/core';
import data from './data.json';
import labels from './labels.json';

@Component({
  selector: 'app-speeches',
  templateUrl: './speeches.component.html',
  styleUrls: ['./speeches.component.css'],
})
export class SpeechesComponent {
  private rawData: any = data;
  rows: any[] = [];
  cols: string[] = ['title', 'source'];
  public labels = labels;
  constructor() {
    this.buildData();
  }
  buildData() {
    for (let speech of this.rawData.speeches) {
      this.rows.push(speech);
    }
  }
}
