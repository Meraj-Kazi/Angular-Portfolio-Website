import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';
  localUrl = 'http://localhost:3000/profile';

  constructor(private http: HttpClient) { }

  // get all users
  // getUsers() {
  //   return this.http.get(`${ this.apiUrl }?per_page=10`);
  // }

  // get a user by username 
  getUser(username: string) {
    return this.http.get(`${ this.apiUrl }/${username}`);
  }

  getUsers() : Observable<string> {
    return this.http.get<any>(`${ this.apiUrl }?per_page=10`);
  }

  //update user
  updateData (save: any, username: string) {
    const ourUrl = `${ this.apiUrl }/${username}`; 

    return this.http.put(ourUrl, save);
  }


  // Get local users 
getLocalUsers() : Observable<string> {
  return this.http.get<any>(`${ this.localUrl }`);
}

  // Update local users 
updateLocal( updateBody: any): Observable<any> {
  const localUrlTest = 'http://localhost:3000/profile/' + updateBody.id;
  return this.http.put(`${localUrlTest}`, updateBody);
}

  // Delete local users 
  deleteLocal( id:any): Observable<any> {
    const localUrlTest = 'http://localhost:3000/profile/' + id;
    return this.http.delete(`${localUrlTest}`);
  }

  // Create local users 
  createLocal(createBody: any): Observable<any> {
    const localUrlTest = 'http://localhost:3000/profile/';
    return this.http.post(localUrlTest, createBody);
  }


// `${ this.apiUrl }/${username}`, username


}