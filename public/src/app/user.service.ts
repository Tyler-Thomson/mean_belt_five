import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user){
    return this._http.post('/users', user).map(data => data.json()).toPromise();
  }
  getUsers(){
    return this._http.get('/users').map(data => data.json()).toPromise();
  }
  incGuesses(id, num){
    return this._http.put(`users/${id}`, num).map(data => data.json()).toPromise();
  }
  setCurrentUser(user){
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
  getCurrentUser(){
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }
  logout(){
    sessionStorage.removeItem('currentUser');
  }
}
