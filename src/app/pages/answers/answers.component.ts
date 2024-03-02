import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddQuestionService } from '../add-question/add-question.service';
import { QuestionItem } from '../../models/question';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css'
})
export class AnswersComponent {
  // receivedData: QuestionItem[] = [];

  // constructor(public questionService: AddQuestionService) {
    
  // }

  // ngOnInit() {
  //   this.questionService.getQuestion().subscribe(data => {
  //     this.receivedData = data;
  //   });
  // }
}
