import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee.component';
import { StylesExample } from './styles.example';
import { EventBinding } from './eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StylesExample,
    EventBinding
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
