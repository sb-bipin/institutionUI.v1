import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="about-section py-5">
      <div class="container">
       <div class="row align-items-center mb-5">
  <div class="col-lg-6 mb-4 mb-lg-0">
    <div class="about-image-wrapper position-relative">
      <img 
        src="assets/images/DSC2235-copy-scaled.jpg" 
        alt="NWA College Campus" 
        class="img-fluid rounded-4 shadow-lg"
      />
      <div class="overlay-badge">
        <div class="badge-content text-center">
          <h3 class="mb-0">Est. 2009</h3>
          <p class="mb-0">Leading Excellence</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6">
    <div class="about-content ps-lg-4">
      <span class="text-primary fw-semibold text-uppercase mb-2 d-block">
        About NWA
      </span>

      <h1 class="display-4 fw-bold mb-4">
        Nepal Western Academy
      </h1>

      <p class="lead text-muted mb-4">
        A center of academic excellence dedicated to nurturing minds and shaping
        professional futures since 2009.
      </p>

      <p class="mb-3">
        Located in <strong>Dhangadhi, Kailali</strong>, Nepal Western Academy (NWA)
        was founded to address the growing demand for quality higher education in
        Nepal’s Sudurpaschim Province. Since its establishment, NWA has remained
        focused on producing competent, confident, and ethically grounded graduates.
      </p>

      <p class="mb-4">
        Affiliated with <strong>Pokhara University</strong>, the academy offers
        programs designed to bridge the gap between academic theory and real-world
        practice—particularly in the fields of <strong>Hotel Management, Banking,
        Insurance, and Management Studies</strong>. Our curriculum emphasizes
        critical thinking, leadership development, and industry readiness.
      </p>

      <div class="row g-3 mb-4">
        <div class="col-sm-6">
          <div class="d-flex align-items-start gap-3">
            <i class="fas fa-graduation-cap text-primary fs-4 mt-1"></i>
            <div>
              <h6 class="fw-bold mb-1">University Affiliation</h6>
              <p class="mb-0 text-muted small">
                Accredited programs under Pokhara University
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="d-flex align-items-start gap-3">
            <i class="fas fa-chalkboard-teacher text-primary fs-4 mt-1"></i>
            <div>
              <h6 class="fw-bold mb-1">Experienced Faculty</h6>
              <p class="mb-0 text-muted small">
                Qualified educators with academic and industry exposure
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="d-flex align-items-start gap-3">
            <i class="fas fa-building text-primary fs-4 mt-1"></i>
            <div>
              <h6 class="fw-bold mb-1">Modern Infrastructure</h6>
              <p class="mb-0 text-muted small">
                Well-equipped classrooms and learning facilities
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="d-flex align-items-start gap-3">
            <i class="fas fa-users text-primary fs-4 mt-1"></i>
            <div>
              <h6 class="fw-bold mb-1">Student-Centered Approach</h6>
              <p class="mb-0 text-muted small">
                Personalized mentoring and academic support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex gap-3 flex-wrap">
        <a routerLink="/admission" class="btn btn-primary btn-lg px-4">
          Apply Now <i class="fas fa-arrow-right ms-2"></i>
        </a>

        <!-- <a routerLink="/about/academy" class="btn btn-outline-primary btn-lg px-4">
          Learn More
        </a> -->
      </div>
    </div>
  </div>
</div>


        <div class="row g-4 mb-5">
          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body p-4">
                <div class="icon-box mb-3">
                  <i class="fas fa-eye fa-3x text-primary"></i>
                </div>
                <h3 class="h4 mb-3">Our Vision</h3>
                <p class="text-muted mb-0">
                  To be an excellence business school recognized nationally and internationally for developing 
                  competent professionals committed to excellence in every dimension and to be a transformational 
                  leader in business thought and education through knowledge creation, innovative programs, 
                  and extraordinary experiences.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body p-4">
                <div class="icon-box mb-3">
                  <i class="fas fa-bullseye fa-3x text-success"></i>
                </div>
                <h3 class="h4 mb-3">Our Mission</h3>
                <ul class="list-unstyled text-muted mb-0">
                  <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Develop platform for learning and exploring knowledge</li>
                  <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Enhance professionalism and social responsibility</li>
                  <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Develop enthusiastic and self-motivated graduates</li>
                  <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Promote liberal and progressive education</li>
                  <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Combine academic excellence with practical experience</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <div class="card-body p-4">
                <div class="icon-box mb-3">
                  <i class="fas fa-heart fa-3x text-danger"></i>
                </div>
                <h3 class="h4 mb-3">Our Values</h3>
                <ul class="list-unstyled text-muted mb-0">
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Student-centered</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Excellence</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Innovation</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Integrity</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Socially Responsible</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Creativity</li>
                  <li class="mb-2"><i class="fas fa-star text-warning me-2"></i>Professionalism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="programs-section mb-5 py-5 bg-light rounded-4">
          <div class="container">
            <div class="text-center mb-5">
              <span class="text-primary fw-semibold text-uppercase mb-2 d-block">Programs</span>
              <h2 class="display-5 fw-bold mb-3">Undergraduate Programs</h2>
              <p class="lead text-muted">Affiliated with Pokhara University</p>
            </div>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="program-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                  <div class="program-icon mb-3">
                    <i class="fas fa-briefcase fa-4x text-primary"></i>
                  </div>
                  <h3 class="h4 mb-3">BBA</h3>
                  <p class="text-muted mb-3">Bachelor of Business Administration</p>
                  <a routerLink="/programs/bba" class="btn btn-outline-primary">
                    Learn More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4">
                <div class="program-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                  <div class="program-icon mb-3">
                    <i class="fas fa-hotel fa-4x text-success"></i>
                  </div>
                  <h3 class="h4 mb-3">BHM</h3>
                  <p class="text-muted mb-3">Bachelor of Hotel Management</p>
                  <a routerLink="/programs/bhm" class="btn btn-outline-success">
                    Learn More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>

              <div class="col-md-4">
                <div class="program-card text-center p-4 bg-white rounded-4 shadow-sm h-100">
                  <div class="program-icon mb-3">
                    <i class="fas fa-chart-line fa-4x text-danger"></i>
                  </div>
                  <h3 class="h4 mb-3">BBA - Finance</h3>
                  <p class="text-muted mb-3">Banking & Insurance Specialization</p>
                  <a routerLink="/programs/bba-finance" class="btn btn-outline-danger">
                    Learn More <i class="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="highlights-section mb-5">
          <div class="text-center mb-5">
            <span class="text-primary fw-semibold text-uppercase mb-2 d-block">Why Choose NWA</span>
            <h2 class="display-5 fw-bold mb-3">Facilities & Support</h2>
          </div>
          <div class="row g-4">
            <div class="col-sm-6 col-lg-3" *ngFor="let facility of facilities">
              <div class="highlight-card text-center p-4 h-100 border rounded-3 hover-lift">
                <i [class]="'fas ' + facility.icon + ' fa-3x text-primary mb-3'"></i>
                <h5 class="mb-2">{{ facility.title }}</h5>
                <p class="text-muted small mb-0">{{ facility.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="stats-section py-5 bg-primary text-white rounded-4 mb-5">
          <div class="row text-center g-4">
            <div class="col-6 col-md-3" *ngFor="let stat of stats">
              <div class="stat-item">
                <h2 class="display-4 fw-bold mb-2">{{ stat.value }}</h2>
                <p class="mb-0">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cta-section text-center py-5">
          <h2 class="display-5 fw-bold mb-4">Ready to Start Your Journey?</h2>
          <p class="lead text-muted mb-4">
            Join Nepal Western Academy and shape your future with quality education and practical experience.
          </p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a routerLink="/admission" class="btn btn-primary btn-lg px-5">
              Apply for Admission
            </a>
            <a routerLink="/contact" class="btn btn-outline-primary btn-lg px-5">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
    }

    .about-image-wrapper {
      position: relative;
    }

    .overlay-badge {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .badge-content h3 {
      color: var(--bs-primary);
      font-size: 2rem;
      font-weight: 700;
    }

    .badge-content p {
      color: #6c757d;
      font-size: 0.9rem;
    }

    .hover-lift {
      transition: all 0.3s ease;
    }

    .hover-lift:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
    }

    .icon-box {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--bs-primary-rgb), 0.1);
      border-radius: 1rem;
    }

    .program-card {
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .program-card:hover {
      border-color: var(--bs-primary);
      transform: translateY(-5px);
    }

    .program-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(var(--bs-primary-rgb), 0.1);
      border-radius: 50%;
    }

    .highlight-card {
      transition: all 0.3s ease;
      background: white;
    }

    .highlight-card:hover {
      border-color: var(--bs-primary) !important;
      background: rgba(var(--bs-primary-rgb), 0.05);
    }

    .stats-section {
      background: linear-gradient(135deg, var(--bs-primary) 0%, #0056b3 100%);
    }

    .stat-item h2 {
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      .display-4 {
        font-size: 2rem;
      }

      .display-5 {
        font-size: 1.75rem;
      }
    }
  `]
})
export class AboutSectionComponent {
  facilities = [
    {
      icon: 'fa-chalkboard-teacher',
      title: 'Expert Faculty',
      description: 'Nationally recognized teachers with industry experience'
    },
    {
      icon: 'fa-laptop-code',
      title: 'Modern Labs',
      description: 'Computer labs with high-speed internet'
    },
    {
      icon: 'fa-book-reader',
      title: 'Library',
      description: 'Well-stocked library with study lounges'
    },
    {
      icon: 'fa-snowflake',
      title: 'AC Classrooms',
      description: 'Air-conditioned learning environment'
    },
    {
      icon: 'fa-industry',
      title: 'Industrial Visits',
      description: 'Regular field trips and industry exposure'
    },
    {
      icon: 'fa-user-tie',
      title: 'Guest Lectures',
      description: 'Sessions by industry experts'
    },
    {
      icon: 'fa-briefcase',
      title: 'Internships',
      description: 'On-the-job training opportunities'
    },
    {
      icon: 'fa-globe',
      title: 'Global Opportunities',
      description: 'International internship placements'
    }
  ];

  stats = [
    { value: '2009', label: 'Established' },
    { value: '1000+', label: 'Alumni' },
    { value: '3', label: 'Programs' },
    { value: '50+', label: 'Faculty Members' }
  ];
}