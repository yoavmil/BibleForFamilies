import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YehoshuaComponent } from './yehoshua/yehoshua.component';
import { PageComponent } from './page/page.component';
import { MatCardModule } from '@angular/material/card';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    YehoshuaComponent,
    PageComponent,
    GeneralComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
})
export class BooksModule { }
