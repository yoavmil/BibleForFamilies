import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { GoalComponent } from './goal/goal.component';
import { GoalsComponent } from './goals/goals.component';
import { BooksTreeComponent } from './books-tree/books-tree.component';
import { AboutUsComponent } from './history/about-us.component';
import { BuildingBlocksModule } from '../building-blocks/building-blocks.module';

@NgModule({
  declarations: [
    MainComponent,
    IntroComponent,
    GoalComponent,
    GoalsComponent,
    BooksTreeComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTreeModule,
    MatIconModule,
    BuildingBlocksModule
  ],
  exports: [MainComponent],
})
export class LandingPageModule {}
