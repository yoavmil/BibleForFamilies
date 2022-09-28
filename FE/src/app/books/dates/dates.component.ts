import { Component, OnInit } from '@angular/core';
import data from './data.json';
import labels from './labels.json';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  data: any = data;
  cycle: any[] = [];
  chrono: any[] = [];
  cycleCols: string[] = ['cycle', 'source', 'sum'];
  chronoCols: string[] = ['date', 'source', 'sum'];
  public labels = labels;
  constructor() {
    this.buildCycleData();
    this.buildCrhonoData();
  }
  private buildCrhonoData() {
    for (let id of this.data.chrono) {
      let entry = this.data.dates.find((elem: any) => elem.id == id);
      entry.date = [entry.cycle, entry.year].join(', ');
      this.chrono.push(entry);
    }
  }
  private buildCycleData() {
    for (let id of this.data.cycle) {
      const entry = this.data.dates.find((elem: any) => elem.id == id);
      this.cycle.push(entry);
    }
  }

  ngOnInit(): void {}
}
