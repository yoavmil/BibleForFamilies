import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YehoshuaComponent } from './yehoshua/yehoshua.component';
import { PageComponent } from './page/page.component';
import { MatCardModule } from '@angular/material/card';
import { GeneralComponent } from './general/general.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    YehoshuaComponent,
    PageComponent,
    GeneralComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class BooksModule { }
