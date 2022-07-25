import { Component } from '@angular/core';
import { BookData } from '../book-data';
import content from './content.json';

@Component({
  selector: 'app-yehoshua',
  templateUrl: './yehoshua.component.html',
  styleUrls: ['./yehoshua.component.css']
})
export class YehoshuaComponent {
  data: BookData = content;
}
