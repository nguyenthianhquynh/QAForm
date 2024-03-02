import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddQuestionComponent } from './modal-add-question/modal-add-question.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { TextInputComponent } from './components/text-input/text-input.component';


@NgModule({
  declarations: [
    ModalAddQuestionComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalComponent,
    DialogModule,
    DialogComponent,
  ],
  exports: [
    TextInputComponent
  ]
})
export class SharedModule { }
