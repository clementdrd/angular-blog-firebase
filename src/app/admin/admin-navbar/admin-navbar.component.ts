import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  public view : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setView(view: string) {
    this.view = view
  }
}
