import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DatesComponent } from './books/dates/dates.component';
import { GeneralComponent } from './books/general/general.component';
import { PrayersComponent } from './books/prayers/prayers.component';
import { YehoshuaComponent } from './books/yehoshua/yehoshua.component';
import { MainComponent } from './landing-page/main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Yehoshua/:id', component: YehoshuaComponent },
  { path: 'Yehoshua', redirectTo: 'Yehoshua/0' },
  { path: 'General/:id', component: GeneralComponent },
  { path: 'HowToLearn', redirectTo: 'General/0' },
  { path: 'dates', component: DatesComponent },
  { path: 'prayers', component: PrayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
