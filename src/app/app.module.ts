import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TooltipModule} from "ng2-tooltip";
import {Ng2Webstorage} from 'ng2-webstorage';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { QuestionComponent } from "./question.component";
import { SingleComponent } from "./single.component";
import { ChooseQuestionComponent } from "./features/choose-question.component";
import { QuestionActionComponent } from "./features/question-action.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SingleComponent,
    ChooseQuestionComponent,
    QuestionActionComponent
  ],
  imports: [
    ButtonsModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    TooltipModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng2Webstorage
  ],
  entryComponents: [
    ChooseQuestionComponent,
    QuestionActionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
