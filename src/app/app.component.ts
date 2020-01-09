import { Component, Input } from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css']
})

export class AppComponent {
    // title : string = "welcome to angular application";

    @Input("")
    name : string = ""
    massage : string = "";
    clicked : boolean = false;
}
