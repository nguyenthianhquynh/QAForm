import cuid from "cuid";

export interface IQuestion {
    id: string;
    items: IQuestionItem[];
}

export interface IType {
    name: string;
    content: any;
}

export interface IQuestionItem {
    id: string;
    question: string;
    type: IType;
    answer: Object;
}

export class Question implements Question {
    items: IQuestionItem[] = [];
}

export class QuestionItem implements IQuestionItem {
    id: string = cuid();
    question: string = '';
    type: IType = {
        name: 'text',
        content: null
    };
    answer: Object = null;
}