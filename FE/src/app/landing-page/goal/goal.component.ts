import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  @Input() title: string = "Title goes here";
  @Input() text: string = "Text goes here";
  @Input() timeout : number = 0;
  @Output() nextClicked = new EventEmitter<void>();

  constructor() { }
}
