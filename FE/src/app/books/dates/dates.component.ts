import { Component, OnInit } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent implements OnInit {
  data: any = data;
  cycle: any[] = [];
  crhono: any[] = [];
  cycleCols: string[] = ['cycle', 'source', 'sum'];
  chronoCols: string[] = ['cycle', 'year', 'source', 'sum'];

  constructor() {
    this.buildCycleData();
    this.buildCrhonoData();
  }
  private buildCrhonoData() {
    for (let id of this.data.chrono) {
      const entry = this.data.dates.find((elem: any) => elem.id == id);
      this.crhono.push(entry);
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
