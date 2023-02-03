import { Component } from '@angular/core';
import labels from './labels.json';
import judges from './judges.json';

class Judge {
  name: string;
  tribe: string;
  enemy: string;
  source: string;
  timespan: number;
}

@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.css'],
})
export class JudgesComponent {
  constructor() {}

  labels = labels;
  judges: Judge[] = judges.judges;
  judgesCols: string[] = ['name', 'tribe', 'enemy', 'source', 'timespan'];
}
