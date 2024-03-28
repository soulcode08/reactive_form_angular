import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css',
})
export class EmployeeformComponent {
  employeeForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.employeeForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    }
  }
}
