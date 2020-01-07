import { Component } from '@angular/core';

@Component({
  selector : 'emp-root',
  template : '<div><h1>EMPLYEE TABLE</h1></div>',
  templateUrl : './employe.component.html'
})
export class EmployeeComponent {
  f_name : string = "Pritam";
  l_name : string = "Dutta";
  com_name : string = "TrendsBay";
  app_area : string = "angular & node js";
  working_exp : string = "6 years";
  gos_salary = 10000;
  net_salary = 5000;

  getTotalSalary () {
    return this.gos_salary + this.net_salary;
  }
}
