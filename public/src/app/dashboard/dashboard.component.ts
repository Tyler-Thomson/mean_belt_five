import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser:any = {_id: 0};
  users:any = [];

  constructor(
    private _userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn();
    this.getUsers();
  }

  getCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }
  isLoggedIn(){
    if(this._userService.getCurrentUser()==null){
      this.router.navigateByUrl('/');
    }
  }
  getUsers(){
    return this._userService.getUsers()
    .then(users => this.users = users)
    .catch(err => console.log(err));
  }
  logout(){
    this._userService.logout();
    this.router.navigateByUrl('/');
  }
}
