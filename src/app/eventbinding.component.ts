import {Component} from '@angular/core';

@Component ({
    selector : 'eventbinding-root',
    templateUrl : './eventbinding.component.html'
})

export class EventBinding {
    f_name : string = "Pritam";
    s_name : string = "Dutta";
    age = 20;
    collage : string = "NIT"

    public showDetails : boolean = false;

    buttonclicked() : void {
        this.showDetails = this.showDetails ? false : true;
        console.log('CLICKED');
    }
}