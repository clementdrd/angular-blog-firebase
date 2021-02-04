import { Component, OnInit } from '@angular/core';
import * as sha from "sha256"

import { AdminModel } from '../models/admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public AdminCred = new AdminModel()
  public isAdmin : boolean = false;

  constructor( private AdminService : AdminService) { }

  ngOnInit(): void {
  }

  logAdmin($event : Event) : void {
    $event.preventDefault()
    this.AdminService.getAdminCredentials().subscribe((element) => {
      if (this.AdminCred.email === element.email && sha(this.AdminCred.password) === element.password) {
        this.isAdmin = true
        console.log("Admin")
      }
    })
  }
}
