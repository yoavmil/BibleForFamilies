import { Component } from '@angular/core';

export class GoalText {
  public title: string = '';
  public text: string = '';
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent {
  constructor() {
    this.startTimer();
  }

  public goals: GoalText[] = [
    {
      title: 'הנגשת התנך ללימוד משפחתי',
      text: 'נסביר איך ללמד את התנך לילדים. נשתף בניננו את הדילמות והחוויות.',
    },
    {
      title: 'מיקוד בפרקים החשובים',
      text: 'תפסת מרובה - לא תפסת. לא נפספס את הפרקים המעניינים. לא נפספס את המסרים החשובים. לא נפספס את הפסוקים המפורסמים.',
    },
  ];

  public goalIdx: number = 0;
  public next() {
    this.goalIdx = (this.goalIdx + 1) % this.goals.length;
    this.resetTimer();
  }

  private timeoutMs: number = 5 * 1000;
  private lastTick: number = Date.now();
  private _timeout: number = 0;
  public get timeout(): number {
    return this._timeout * 100;
  }
  private resetTimer() {
    this.lastTick = Date.now();
  }
  startTimer() {
    this.resetTimer();
    setInterval(() => this.timerTick(), 100);
  }
  private timerTick() {
    let dt = Date.now() - this.lastTick;
    if (dt >= this.timeoutMs * 1.1) this.next();
    this._timeout = dt / this.timeoutMs;
  }
}
