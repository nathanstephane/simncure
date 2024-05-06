import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //defaut user
  getUser(){
    return this.http.get(`http://localhost:3000/api`);
  }

  //users table
  getUsers()
  {
    return this.http.get(`http://localhost:3000/api/users`);
  }
}
