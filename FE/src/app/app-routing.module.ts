import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './books/general/general.component';
import { YehoshuaComponent } from './books/yehoshua/yehoshua.component';
import { MainComponent } from './landing-page/main/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Yehoshua/:id', component: YehoshuaComponent },
  { path: 'Yehoshua', redirectTo: 'Yehoshua/0' },
  { path: 'General/:id', component: GeneralComponent },
  { path: 'HowToLearn', redirectTo: 'General/0' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
