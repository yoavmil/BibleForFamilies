import { Component, OnInit } from '@angular/core';
import { BookData } from '../book-data';
import content from './content.json';

@Component({
  selector: 'app-shmuel',
  templateUrl: './shmuel.component.html',
  styleUrls: ['./shmuel.component.css']
})
export class ShmuelComponent {
  data: BookData = content;
}
