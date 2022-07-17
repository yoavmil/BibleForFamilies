import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { GoalComponent } from './goal/goal.component';
import { MatCardModule } from '@angular/material/card';
import { GoalsComponent } from './goals/goals.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [MainComponent, IntroComponent, GoalComponent, GoalsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressBarModule],
  exports: [MainComponent],
})
export class LandingPageModule {}
