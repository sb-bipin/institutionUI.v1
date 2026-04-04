import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-bar">
      <div class="container-fluid px-3 px-lg-4">
        <div class="row align-items-center gy-2">

          <div class="col-12 col-lg-8">
            <div class="contact-info">
              <a class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>info&#64;nwa.edu.np</span>
              </a>

              <a class="contact-item">
                <i class="fas fa-phone-alt"></i>
                <span>+977-091-527005</span>
              </a>

              <a class="contact-item d-none d-md-flex">
                <i class="fas fa-map-marker-alt"></i>
                <span>Dhangadhi, Nepal</span>
              </a>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="top-actions">
              <a
                href="http://46.250.226.63:8080/admin/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-mis"
              >
                <i class="fas fa-sign-in-alt"></i>
                <span class="d-none d-sm-inline">MIS Login</span>
              </a>

              <div class="social-links d-none d-md-flex">
                <a class="social-icon" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="social-icon" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="social-icon" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="social-icon" aria-label="YouTube">
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
      background: linear-gradient(135deg, #0f172a, #1e293b);
      color: #fff;
      font-size: 14px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 992px) {
      .contact-info {
        justify-content: flex-start;
      }
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      transition: color 0.3s ease;
      white-space: nowrap;
    }

    .contact-item i {
      color: #38bdf8;
      font-size: 13px;
    }

    .contact-item:hover {
      color: #ffffff;
    }

    .top-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }

    @media (min-width: 992px) {
      .top-actions {
        justify-content: flex-end;
      }
    }

    .btn-mis {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #ef4444, #dc2626);
      color: #fff;
      padding: 7px 18px;
      border-radius: 30px;
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
    }

    .btn-mis:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(239, 68, 68, 0.45);
      color: #fff;
    }

    .social-links {
      display: flex;
      gap: 8px;
    }

    .social-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255,255,255,0.12);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .social-icon:hover {
      background: #fff;
      color: #0f172a;
      transform: translateY(-2px);
    }

    @media (max-width: 575px) {
      .top-bar {
        font-size: 12px;
      }

      .contact-info {
        gap: 12px;
      }

      .btn-mis {
        padding: 8px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        justify-content: center;
      }

      .btn-mis span {
        display: none;
      }
    }
  `]
})
export class TopBarComponent { }