import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';

const routes: Routes = [
  { path : "admin", component : AdminloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
