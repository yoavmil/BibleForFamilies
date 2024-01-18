import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ArticlesComponent } from './books/articles/articles.component';
import { DatesComponent } from './books/dates/dates.component';
import { GeneralComponent } from './books/general/general.component';
import { PrayersComponent } from './books/prayers/prayers.component';
import { JudgesComponent } from './books/shoftim/judges/judges.component';
import { ShoftimComponent } from './books/shoftim/shoftim.component';
import { SpeechesComponent } from './books/speeches/speeches.component';
import { YehoshuaComponent } from './books/yehoshua/yehoshua.component';
import { MainComponent } from './landing-page/main/main.component';
import { ShmuelComponent } from './books/shmuel/shmuel.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Yehoshua/:id', component: YehoshuaComponent },
  { path: 'Yehoshua', redirectTo: 'Yehoshua/0' },
  { path: 'Shoftim/list', component: JudgesComponent },
  { path: 'Shoftim/:id', component: ShoftimComponent },
  { path: 'Shoftim', redirectTo: 'Shoftim/0' },
  { path: 'Shmuel/:id', component: ShmuelComponent },
  { path: 'Shmuel', redirectTo: 'Shmuel/0' },
  { path: 'General/:id', component: GeneralComponent },
  { path: 'HowToLearn', redirectTo: 'General/0' },
  { path: 'dates', component: DatesComponent },
  { path: 'speeches', component: SpeechesComponent },
  { path: 'prayers', component: PrayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'articles/:id', component: ArticlesComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
