import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-root',
    template: `
                <div>
                    <!-- <h3> Hello {{name}}</h3> -->
                    <button (click) = "sendMassage()">Submit</button>
                </div>
    `
})

export class ChildComponent {
    @Input("parentData") public name;
    @Output() public childEvent = new EventEmitter();
    @Output() public Submited = new EventEmitter();
    sendMassage(): void {
        this.childEvent.emit(this.name);
        this.Submited.emit(true);
        console.log("clicked");
    }
}