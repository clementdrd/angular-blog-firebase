import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminModel } from "../models/admin.model"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient ) { }

  //admin email : potatoes@master.fr
  //admin password : ILovePotat0es

  getAdminCredentials() {
    return this.http.get<AdminModel>("https://angular-projet-epitech-default-rtdb.europe-west1.firebasedatabase.app/admin.json")
  }
}
