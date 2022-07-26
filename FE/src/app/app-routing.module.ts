import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YehoshuaComponent } from './books/yehoshua/yehoshua.component';
import { MainComponent } from './landing-page/main/main.component';

const appRoutes: Routes = [
  { path: "", component: MainComponent },
  { path: "Yehoshua/:id", component: YehoshuaComponent },
  { path: "Yehoshua", redirectTo: "Yehoshua/0" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
