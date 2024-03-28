import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Reactive Module
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeformComponent } from './employeeform/employeeform.component';

@NgModule({
  declarations: [AppComponent, EmployeeformComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
