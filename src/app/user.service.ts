import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  // get all users
  // getUsers() {
  //   return this.http.get(`${ this.apiUrl }?per_page=10`);
  // }

  // get a user by username 
  getUser(username: string) {
    return this.http.get(`${ this.apiUrl }/${username}`);
  }

  getUsers() : Observable<[]> {
    return this.http.get<[]>(`${ this.apiUrl }?per_page=10`);
  }
}
