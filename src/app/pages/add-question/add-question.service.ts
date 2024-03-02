import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQuestion, QuestionItem } from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  private questionSource = new BehaviorSubject<QuestionItem[] | null>(null);
  question$ = this.questionSource.asObservable();

  setQuestion(questionItem: QuestionItem) {
    let value = this.questionSource.getValue();
    if (!value) {
      value = [questionItem]; // Ensure value is an array
    }
    else {
      value = [...value, questionItem];
    }
    this.questionSource.next(value);
  }

  setAnswer(answer: any, index: number) {
    let value = this.questionSource.getValue();
    value[index].answer = answer;
    this.questionSource.next(value);
  }

  getValues() {
    return this.questionSource.getValue();
  }

  getQuestion() {
    return this.question$;
  }
  constructor() { }
}
