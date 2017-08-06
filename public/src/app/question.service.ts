import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  createQuestion(question){
    return this._http.post('/questions', question).map(data => data.json()).toPromise()
  }
  getRandQuestions(){
    return this._http.get('/questions').map(data => data.json()).toPromise();
  }
}
