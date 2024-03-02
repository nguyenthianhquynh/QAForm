import { Routes } from '@angular/router';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { AnswersComponent } from './pages/answers/answers.component';

export const routes: Routes = [
    {
        path: '', component: AddQuestionComponent,
    },

    //http://localhost:4200/form/builder
    {
        path : 'form/builder', component: BuilderComponent
    },
    //http://localhost:4200/form/answers
    {
        path: 'form/answers', component: AnswersComponent
    },  
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
