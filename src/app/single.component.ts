import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit, Type, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { QuestionComponent } from "./question.component";
import { ChooseQuestionComponent } from "./features/choose-question.component";
import { QuestionActionComponent } from "./features/question-action.component";

@Component({
    selector: 'single',
    template: `
        <template><--Choose-Question--></template>
        <template><--Choose-Question--></template>
    `
})
export class SingleComponent extends QuestionComponent implements AfterViewInit {
    
    @ViewChildren(TemplateRef, { read: ViewContainerRef }) containers: QueryList<ViewContainerRef>;

    constructor(private resolver: ComponentFactoryResolver) {
        super();
    }

    ngAfterViewInit(): void {
        let features: Type<any>[] = [ChooseQuestionComponent, QuestionActionComponent];
        this.addFeature(this.resolver, this.containers, features);
    }
}