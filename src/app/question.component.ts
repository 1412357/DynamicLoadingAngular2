import { Component, NgModule, Input, ComponentFactory, ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, ViewChild, TemplateRef, Output, EventEmitter, AfterViewInit, Type, QueryList } from '@angular/core'

import { ChooseQuestionComponent } from "./features/choose-question.component";

@Component({
    selector: 'question',
    template: ``
})
export class QuestionComponent {
    componentRefs: ComponentRef<any>[];
    addFeature(resolver: ComponentFactoryResolver, containers: QueryList<ViewContainerRef>, features: Type<any>[]) {
        this.componentRefs = new Array<ComponentRef<any>>();
        containers.forEach((container, index) => {
            console.log(container);
            container.clear(); 
            const factory: ComponentFactory<any> = resolver.resolveComponentFactory(features[index]);
            this.componentRefs.push(container.createComponent(factory));
        });
    }

    ngOnDestroy() {
        this.componentRefs.forEach(componentRef => {
            componentRef.destroy();
        });
    }
}