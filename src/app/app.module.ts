import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminService } from "./services/admin.service";
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AdminCreatePostComponent } from './admin/admin-create-post/admin-create-post.component';
import { AdminDisplayPostComponent } from './admin/admin-display-post/admin-display-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminNavbarComponent,
    AdminCreatePostComponent,
    AdminDisplayPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    AdminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
