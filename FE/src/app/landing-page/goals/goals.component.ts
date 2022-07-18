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
    {
      title: 'הבנת רצף האירועים',
      text: 'ניתן דגש על הסדר הכרונולוגי. לפעמים אפילו נדלג בין פרקים ובין ספרים כדי להבין את המאורעות.',
    },
    {
      title: 'מעקב התקדמות',
      text: 'נסמן את הפרקים שכבר למדנו. נראה כמה נשאר. בצעדים קטנים נקיף את הכל. ',
    },
    {
      title: 'אגדות חזל',
      text: 'לימוד הפשט הוא העיקר. נעזר במדרשי חז"ל לצד הפשט. ולא נחמיץ מדרש בעל מסר חשוב, אף אם הוא סוטה מהפשט.',
    },
    {
      title: 'ארכיאולוגיה ומקומות ענין',
      text: 'הארץ מלאה בממצאים מימי התנ"ך. אם יש ממצאים שקשורים לפרק – נביא אותם בשמחה.',
    },
  ];

  public circleClicked(idx: number) {
    this.setGoalIdx(idx);
  }

  private setGoalIdx(idx: number) {
    this.goalIdx = idx;
    this.resetTimer();
  }

  public goalIdx: number = 0;
  public next() {
    this.setGoalIdx((this.goalIdx + 1) % this.goals.length);
  }

  private timeoutMs: number = 5 * 1000;
  private lastTick: number = Date.now();
  private _timeout: number = 0;
  public get timeout(): number {
    return this._timeout * 100;
  }
  private resetTimer() {
    this.lastTick = Date.now();
    this._timeout = 0;
  }
  startTimer() {
    this.resetTimer();
    setInterval(() => this.timerTick(), 100);
  }
  private timerTick() {
    if (!this.pause) {
      let dt = Date.now() - this.lastTick;
      this._timeout += dt / this.timeoutMs;
    }
    this.lastTick = Date.now();
    if (this._timeout > 1.1) this.next();
  }

  private pause: boolean = false;
  public mouseOver() { this.pause = true; }
  public mouseOut() { this.pause = false; }
}
