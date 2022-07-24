import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BooksSpanComponent } from './header/books-span/books-span.component';
import { BuildingBlocksModule } from './building-blocks/building-blocks.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing-page/main/main.component';

const appRoutes: Routes = [
  { path: "", component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksSpanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BuildingBlocksModule,
    LandingPageModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
