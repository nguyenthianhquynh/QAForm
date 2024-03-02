import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderComponent } from './builder/builder.component';
import { AnswersComponent } from './answers/answers.component';

@NgModule({
  declarations: [
    AddQuestionComponent,
    BuilderComponent,
    AnswersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddQuestionComponent,
    BuilderComponent,
    FormsModule,
    ReactiveFormsModule,
    AnswersComponent
  ]
})
export class PagesModule { }
