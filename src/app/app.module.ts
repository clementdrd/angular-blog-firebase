import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogMainPageComponent } from './blog-main-page/blog-main-page.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogMainPageComponent,
    BlogPostPageComponent,
    HomePageComponent,
    UnknownPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
