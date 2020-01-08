import { Component } from '@angular/core'

@Component({
    selector: 'two-way-data-binding-root',
    templateUrl : './twowaydatabinding.component.html'
})

export class TwoWayDataBinding {
    f_name: string = "";
    s_name: string = "";
    email: string = "";
    submitted_fname : string = "";
    submitted_sname : string = "";
    submitted_email : string = "";

    submit() : void {
        this.submitted_fname = this.f_name;
        this.submitted_sname = this.s_name;
        this.submitted_email = this.email;
    }

    clear() : void {
        this.submitted_email = this.submitted_fname = this.submitted_sname = "";
    }
}