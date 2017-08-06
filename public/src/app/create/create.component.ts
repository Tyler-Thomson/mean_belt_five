import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  currentUser: any = {};
  newQuestion: any = {};
  errors: string[] = [];


  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn();
  }

  createQuestion(){
    this.errors = [];
    this.newQuestion.user = this.currentUser; this._questionService.createQuestion(this.newQuestion)
    .then(question => {
      if(question.errors){
        for(let key in question.errors){
          let error = question.errors[key];
          this.errors.push(error.message);
          console.log("Errors: ", this.errors);
        }
      } else {
        console.log(this.newQuestion);
         this.router.navigateByUrl('dashboard');
      }
    })
    .catch(err => {console.log(err)});
  }

  isLoggedIn(){
    if(this._userService.getCurrentUser()==null){
      this.router.navigateByUrl('/');
    }
  }
}
