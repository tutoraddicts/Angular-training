import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee.component';
import { StylesExample } from './styles.example';
import { EventBinding } from './eventbinding.component';
import {TwoWayDataBinding} from './twowaydatabinding.component';
import { StructuralDerective } from './structuralderective.component';
import { TitlePipe } from './title.pipe';
import {ChildComponent} from './chiled.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StylesExample,
    EventBinding,
    TwoWayDataBinding,
    StructuralDerective, 
    TitlePipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
