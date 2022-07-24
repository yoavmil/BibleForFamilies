import { Component, OnInit } from '@angular/core';
import texts from './text.json';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  constructor() {
    console.log(this.header);
    console.dir(this.paragraphs);
  }
  public header = texts.header;
  public paragraphs = texts.paragraphs;
  ngOnInit(): void {}
}
