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
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DatesComponent } from './dates/dates.component';
import { PrayersComponent } from './prayers/prayers.component';
import { ArticlesComponent } from './articles/articles.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { ShoftimComponent } from './shoftim/shoftim.component';
import { JudgesComponent } from './shoftim/judges/judges.component';
import { ShmuelComponent } from './shmuel/shmuel.component';

@NgModule({
  declarations: [
    YehoshuaComponent,
    PageComponent,
    GeneralComponent,
    CommentsComponent,
    DatesComponent,
    PrayersComponent,
    ArticlesComponent,
    SpeechesComponent,
    ShoftimComponent,
    JudgesComponent,
    ShmuelComponent,
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
    MatInputModule,
    MatTableModule,
  ],
})
export class BooksModule {}
