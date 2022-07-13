import { Component } from '@angular/core';

export class GoalText {
  public title: string = "";
  public text: string = "";
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {

  constructor() { }

  public goals: GoalText[] = [
    {
      title: "הנגשת התנך ללימוד משפחתי",
      text: "נסביר איך ללמד את התנך לילדים. נשתף בניננו את הדילמות והחוויות."
    },
    {
      title: "מיקוד בפרקים החשובים",
      text: "תפסת מרובה - לא תפסת. לא נפספס את הפרקים המעניינים. לא נפספס את המסרים החשובים. לא נפספס את הפסוקים המפורסמים."
    },
  ];

  public goalIdx: number = 0;
  public next() {
    this.goalIdx = (this.goalIdx + 1) % this.goals.length;
  }
}
