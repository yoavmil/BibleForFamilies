import { Component } from '@angular/core';
import { BookData } from '../book-data';
import content from './content.json';

@Component({
  selector: 'app-shoftim',
  templateUrl: './shoftim.component.html',
  styleUrls: ['./shoftim.component.css'],
})
export class ShoftimComponent {
  data: BookData = content;
  constructor() {}
}
