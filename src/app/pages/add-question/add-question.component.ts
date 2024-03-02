import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ModalAddQuestionComponent } from '../../shared/modal-add-question/modal-add-question.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { AddQuestionService } from './add-question.service';
import { IQuestion, QuestionItem } from '../../models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {
  @Input() checkoutForm?: FormGroup;
  @Input() isAnswerPage: boolean = false;

  name: string = 'select an address';
  modalContentTemplate!: TemplateRef<any>; // Declare the property here
  answerForm: FormGroup;
  questionList: QuestionItem[] = [];
  selectedValues: string[] = [];

  constructor(public dialog: Dialog, private fb: FormBuilder, public questionService: AddQuestionService, private router: Router) {
  }

  ngOnInit(): void {
    this.answerForm = this.fb.group({})
    this.questionService.getQuestion().subscribe(data => {
      this.questionList = data;
      for (let i = 0; i < data.length; i++) {
        this.addControl('answer' + i);

        //if item in data is a Text, then add default value to the form
        if (data[i].type.name === 'text' && !this.isAnswerPage) {
          this.answerForm.get('answer' + i).setValue(data[i].answer); // Add value to array if checkbox is checked
        }
        else if (data[i].type.name === 'checkbox' && data[i].answer != null && !this.isAnswerPage) {
          this.selectedValues = data[i].answer as string[];

        }
      }

    });
  }

  isChecked(value: string) {
    return this.selectedValues.includes(value);
  }

  // Method to dynamically add a control
  addControl(fieldName: string) {
    this.answerForm.addControl(fieldName, this.fb.control(''));
  }

  // Method to dynamically remove a control
  removeControl(fieldName: string) {
    this.answerForm.removeControl(fieldName);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(ModalAddQuestionComponent, {
      width: '350px',
      data: { name: this.name },
    });

    dialogRef.closed.subscribe(result => {
      let list = result as unknown as QuestionItem
      this.questionService.setQuestion(list);

      this.questionService.getQuestion().subscribe(data => {
        this.questionList = data;
        this.addControl('answer' + (data.length - 1));

      }
      );
      this.router.navigate(['/form/builder']);
    });
  }

  navigateToPage(address: string) {
    this.questionList = this.questionService.getValues();

    for (let i = 0; i < this.questionList.length; i++) {
      if (this.questionList[i].type.name === 'checkbox') {
        this.questionService.setAnswer(this.selectedValues, i);
      }
      else if (this.answerForm.get('answer' + i)) {
        this.questionService.setAnswer(this.answerForm.get('answer' + i).value, i);
      }
    }

    this.router.navigate([address]);
  }

  backToBuilder() {
    this.router.navigate(['/form/builder']);
  }

  toggleCheckbox(event: any, value: string) {
    if (event.target.checked) {
      this.selectedValues.push(value); // Add value to array if checkbox is checked
    } else {
      const index = this.selectedValues.indexOf(value);
      if (index !== -1) {
        this.selectedValues.splice(index, 1); // Remove value from array if checkbox is unchecked
      }
    }
  }
}