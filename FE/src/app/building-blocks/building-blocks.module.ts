import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalDividerComponent } from './vertical-divider/vertical-divider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    VerticalDividerComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    VerticalDividerComponent,
    CarouselComponent
  ]
})
export class BuildingBlocksModule { }
