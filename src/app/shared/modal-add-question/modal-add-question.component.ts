import { Component, Inject, OnInit } from '@angular/core';
import { AddQuestionService } from '../../pages/add-question/add-question.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DialogData } from '../../models/dialogData';
import { IQuestionItem, Question, QuestionItem } from '../../models/question';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add-question',
  templateUrl: './modal-add-question.component.html',
  styleUrl: './modal-add-question.component.css'
})
export class ModalAddQuestionComponent implements OnInit {
  questionItem: QuestionItem = new QuestionItem();
  isOpen = false;
  //new array have 5 items
  chbList: string[] = Array(5)

  constructor(private questionService: AddQuestionService, private fb: FormBuilder,
    public dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public dialog: DialogData,
  ) {

  }

  registerForm = this.fb.group({
    question : ['', Validators.required]
  })
  
  ngOnInit(): void {

  }

  onSubmit() {
    console.log('submitted');
  }

  toggleBtn() {
    this.isOpen = !this.isOpen;
  }

  closeDialog() {
    this.questionItem.question = this.registerForm.value.question;


    if (this.chbList.some(x => x !== '')) {
      let specificChb = this.chbList.filter(x => x !== '');

      this.questionItem.answer = specificChb;
      this.questionItem.type.name = 'checkbox';
      this.questionItem.type.content = specificChb;
      this.questionItem.answer = null;
    }

    this.dialogRef.close(this.questionItem)
  }

  name1 = '5';
  arr = Array(5).fill(1).map((x, i) => i);

  myContext = {
    $implicit: 'Add a new question',
    addresses: this.questionItem,
    data: null
  };
}
