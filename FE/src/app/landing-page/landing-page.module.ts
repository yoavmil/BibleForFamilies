import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    MainComponent,
    IntroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class LandingPageModule { }
