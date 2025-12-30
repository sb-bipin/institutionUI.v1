
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-content">
          <div class="contact-info">
            <span class="contact-item">
              <i class="icon-email"></i>
              <a href="mailto:info@nwa.edu.np">info&#64;nwa.edu.np</a>
            </span>
            <span class="contact-item">
              <i class="icon-phone"></i>
              <a href="tel:+977-091-527005">+977-091-527005</a>
            </span>
          </div>
          <div class="actions">
            <a href="http://46.250.226.63:8080/admin/" 
               target="_blank" 
               class="mis-login">
              MIS Login
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .top-bar {
      background-color: #1a1a2e;
      color: #fff;
      padding: 10px 0;
      font-size: 14px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .top-bar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .contact-info {
      display: flex;
      gap: 30px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .contact-item a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;
    }

    .contact-item a:hover {
      color: #ff6b6b;
    }

    .mis-login {
      background-color: #ff6b6b;
      color: #fff;
      padding: 8px 20px;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s;
    }

    .mis-login:hover {
      background-color: #ff5252;
    }

    @media (max-width: 768px) {
      .top-bar-content {
        flex-direction: column;
        gap: 10px;
        text-align: center;
      }

      .contact-info {
        flex-direction: column;
        gap: 10px;
      }
    }
  `]
})
export class TopBarComponent { }

