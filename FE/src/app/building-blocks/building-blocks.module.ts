import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalDividerComponent } from './vertical-divider/vertical-divider.component';

@NgModule({
  declarations: [
    VerticalDividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerticalDividerComponent
  ]
})
export class BuildingBlocksModule { }
