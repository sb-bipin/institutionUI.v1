import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
  standalone: true,

})
export class AdmissionComponent {


  submitted = signal(false);

  programs = signal([
    'BHM',
    'BBS',
    'BCA',
    'BSc CSIT',
    'MBA'
  ]);

  admissionForm;

  constructor(private fb: NonNullableFormBuilder) {

    this.admissionForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      program: ['', Validators.required],
      message: ['']
    });

  }

  get fullName() { return this.admissionForm.controls['fullName']; }
  get email() { return this.admissionForm.controls['email']; }
  get phone() { return this.admissionForm.controls['phone']; }
  get program() { return this.admissionForm.controls['program']; }

  submitForm() {
    this.submitted.set(true);

    if (this.admissionForm.invalid) return;

    console.log(this.admissionForm.getRawValue());
    alert('Admission submitted successfully!');

    this.admissionForm.reset();
    this.submitted.set(false);
  }

}
