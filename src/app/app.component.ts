import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from "ng2-toastr";
import {TooltipModule} from "ng2-tooltip";
import {LocalStorageService, LocalStorage} from 'ng2-webstorage';
import { SingleComponent } from "./single.component";

@Component({
  selector: 'app-root',
  template:  `
    <single></single>
  `
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
