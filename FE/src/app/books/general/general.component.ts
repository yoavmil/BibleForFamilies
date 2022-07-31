import { Component, OnInit } from '@angular/core';
import { BookData } from '../book-data';
import content from './content.json';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent {
  data: BookData = content;
}
