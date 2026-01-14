import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-bar">
      <div class="container-fluid px-3 px-md-4">
        <div class="row align-items-center">
          <div class="col-12 col-lg-8 mb-2 mb-lg-0">
            <div class="contact-info d-flex flex-column flex-md-row justify-content-center justify-content-lg-start align-items-center gap-3 gap-md-4">
              <a  class="contact-item text-decoration-none">
                <i class="fas fa-envelope me-2"></i>
                <span class="contact-text">info&#64;nwa.edu.np</span>
              </a>
              <a  class="contact-item text-decoration-none">
                <i class="fas fa-phone-alt me-2"></i>
                <span class="contact-text">+977-091-527005</span>
              </a>
              <a href="#" class="contact-item text-decoration-none d-none d-md-flex">
                <i class="fas fa-map-marker-alt me-2"></i>
                <span class="contact-text">Dhangadhi, Nepal</span>
              </a>
            </div>
          </div>
          
          <div class="col-12 col-lg-4">
            <div class="actions d-flex justify-content-center justify-content-lg-end align-items-center gap-2">
              <a href="http://46.250.226.63:8080/admin/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="btn btn-mis">
                <i class="fas fa-sign-in-alt me-2"></i>
                <span>MIS Login</span>
              </a>
              <div class="social-links d-none d-md-flex gap-2">
                <a href="#" class="social-icon" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-icon" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon" aria-label="YouTube">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .top-bar {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: #fff;
      padding: 12px 0;
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }

    .top-bar::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        #ff6b6b 20%, 
        #4ecdc4 40%, 
        #45b7d1 60%, 
        #ff6b6b 80%, 
        transparent 100%
      );
      animation: shimmer 3s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }

    .contact-info {
      animation: fadeInLeft 0.6s ease-out;
    }

    .contact-item {
      color: rgba(255, 255, 255, 0.9);
      transition: all 0.3s ease;
      padding: 6px 12px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    .contact-item:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .contact-item i {
      font-size: 14px;
      color: #4ecdc4;
      transition: transform 0.3s ease;
    }

    .contact-item:hover i {
      transform: scale(1.1);
    }

    .contact-text {
      font-weight: 500;
    }

    .actions {
      animation: fadeInRight 0.6s ease-out;
    }

    .btn-mis {
      background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
      color: #fff;
      padding: 8px 20px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      border: 2px solid transparent;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
      white-space: nowrap;
    }

    .btn-mis:hover {
      background: linear-gradient(135deg, #ff5252 0%, #ff6b6b 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
      color: #fff;
    }

    .btn-mis:active {
      transform: translateY(0);
    }

    .btn-mis i {
      font-size: 14px;
    }

    .social-links {
      animation: fadeIn 0.6s ease-out 0.3s both;
    }

    .social-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .social-icon:hover {
      background: #fff;
      color: #1a1a2e;
      transform: translateY(-3px) rotate(360deg);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    }

    .social-icon i {
      font-size: 14px;
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 991px) {
      .top-bar {
        padding: 10px 0;
      }

      .contact-info,
      .actions {
        justify-content: center !important;
      }
    }

    @media (max-width: 767px) {
      .top-bar {
        font-size: 13px;
        padding: 8px 0;
      }

      .contact-item {
        padding: 4px 8px;
        font-size: 12px;
      }

      .contact-item i {
        font-size: 12px;
      }

      .btn-mis {
        padding: 6px 16px;
        font-size: 13px;
      }

      .btn-mis i {
        font-size: 12px;
      }
    }

    @media (max-width: 575px) {
      .top-bar {
        padding: 10px 0;
      }

      .contact-info {
        gap: 8px !important;
      }

      .contact-item {
        font-size: 11px;
      }

      .btn-mis span {
        display: none;
      }

      .btn-mis {
        padding: 8px 12px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        justify-content: center;
      }

      .btn-mis i {
        margin: 0 !important;
      }
    }

    .top-bar:hover::before {
      animation-duration: 2s;
    }
  `]
})
export class TopBarComponent { }