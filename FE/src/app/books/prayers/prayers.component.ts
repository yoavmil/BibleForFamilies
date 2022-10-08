import { Component, OnInit } from '@angular/core';
import data from './data.json';
import labels from './labels.json';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.css'],
})
export class PrayersComponent implements OnInit {
  data: any = data.prayers;
  public labels = labels;
  public cols: string[] = ['source', 'sum'];
  constructor() {}

  ngOnInit(): void {}
}
