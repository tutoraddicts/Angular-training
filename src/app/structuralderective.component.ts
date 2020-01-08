import { Component } from '@angular/core'

@Component({
    selector: 'structural-derective-root',
    templateUrl : './structuralderective.component.html'
})

export class StructuralDerective {
    employees : any[] = [
        { id : 'emp101', name : 'Tom', gender : 'Male', annualSalary : 40000, dob : '20/09/1987'},
        { id : 'emp102', name : 'Simon', gender : 'Male', annualSalary : 350000, dob : '22/11/1987'},
        { id : 'emp103', name : 'David', gender : 'Male', annualSalary : 440000, dob : '10/09/1988'},
        { id : 'emp104', name : 'Mary', gender : 'Female', annualSalary : 600000, dob : '23/09/1988'}
    ]

    colorNames = ['red', 'green', 'yellow', 'purple']
    check() : void {
        
    }
}