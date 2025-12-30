import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email: string = '';


  get currentYear(): number {
    return new Date().getFullYear();
  }
  subscribeNewsletter(): void {
    if (this.email) {
      console.log('Subscribing email:', this.email);
      alert('Thank you for subscribing!');
      this.email = '';
    }
  }
}