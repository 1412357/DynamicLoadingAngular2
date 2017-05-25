import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'question-action',
    template: `Question-action`
})
export class QuestionActionComponent {
    constructor(private http : Http) {
        console.log(this.http);
    }
}