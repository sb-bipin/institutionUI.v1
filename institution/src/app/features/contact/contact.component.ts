import { Component } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;

  contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      details: ['Dhangadhi-2, Santoshi Tole', 'Kailali, Nepal'],
      link: 'https://maps.app.goo.gl/mYjoTsdmpEvyULxh6'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      details: ['+977-091-527005', '+977-091-527006'],
      link: 'tel:+977-091-527005'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      details: ['info@nwa.edu.np', 'admission@nwa.edu.np'],
      link: 'mailto:info@nwa.edu.np'
    },
    {
      icon: 'fa-clock',
      title: 'Working Hours',
      details: ['Sun – Fri: 7:00 AM – 5:00 PM', 'Saturday: Closed'],
      link: null
    }
  ];

  socialLinks = [
    { icon: 'fa-facebook-f', url: '#', label: 'Facebook' },
    { icon: 'fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fa-instagram', url: '#', label: 'Instagram' },
    { icon: 'fa-linkedin-in', url: '#', label: 'LinkedIn' }
  ];

  constructor(private fb: NonNullableFormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;

    setTimeout(() => {
      console.log(this.contactForm.value);
      this.contactForm.reset();
      this.submitted = false;
      this.isSubmitting = false;
      alert('Message sent successfully!');
    }, 1500);
  }
}
