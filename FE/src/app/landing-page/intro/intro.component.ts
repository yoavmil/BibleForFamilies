import { Component } from '@angular/core';
import texts from './text.json';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  constructor() { }
  public header = texts.header;
  public paragraphs = texts.paragraphs;
}
