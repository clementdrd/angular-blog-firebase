import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import { BlogMainPageComponent } from './blog-main-page/blog-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'blog-page', component: BlogMainPageComponent },
  { path: 'blog-post/:id', component: BlogPostPageComponent },
  { path: '', component: HomePageComponent},
  { path: '**', component: UnknownPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
