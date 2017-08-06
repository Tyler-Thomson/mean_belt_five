import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  currentUser: any = {};
  randQuestions:any = [];
  answers: any[] = [];
  num: number = 0;
  errors = [];

  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getRandQuestions()
    this.getCurrentUser()
    this.isLoggedIn()
  }

  getCurrentUser(){
    this.currentUser = this._userService.getCurrentUser();
  }
  isLoggedIn(){
    if(this._userService.getCurrentUser()==null){
      this.router.navigateByUrl('/');
    }
  }
  getRandQuestions(){
    return this._questionService.getRandQuestions()
    .then(randQuestions => {
      this.randQuestions = randQuestions
      for(let i = 0; i < this.randQuestions.length; ++i ) {
      let n = Math.floor( Math.random() * this.randQuestions.length );
      // swap
      let temp = this.randQuestions[i];
      this.randQuestions[i] = this.randQuestions[n];
      this.randQuestions[n] = temp;
      }
      // reduce
      while(this.randQuestions.length > 3){
        let n = Math.floor( Math.random() * this.randQuestions.length );
        this.randQuestions.splice( n, 1 );
      }
    })
    .catch(err => {console.log(err)});
}
  submit(id:string, num:number){
    this.num = 0;
    for(let i = 0; i < this.randQuestions.length; i++) {
      if(this.randQuestions[i].correct == this.randQuestions[i]) {
        this.num++
      }
    }
    this.router.navigateByUrl('dashboard');
    return this._userService.incGuesses(this.currentUser.id, this.num)
    .then(user => console.log(true))
    .catch(err => console.log(err));
  }
}
