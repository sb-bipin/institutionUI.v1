import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  slides = [
    {
      image: 'assets/images/DSC01977-copy-scaled.jpg',
      title: 'Welcome to Nepal Western Academy',
      // subtitle: 'Excellence in Business Education'
    },
    {
      image: 'assets/images/DSC09282-scaled.jpg',
      title: 'Shape Your Future',
      // subtitle: 'Quality Education & Professional Development'
    },
    {
      image: 'assets/images/DSC02093-copy-scaled.jpg',
      title: 'Innovation & Leadership',
      // subtitle: 'Empowering Tomorrow\'s Leaders'
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'NWA Campus Life',
      // subtitle: 'Vibrant Community & Opportunities'
    }
  ];

  programs = [
    {
      code: 'BBA',
      name: 'Bachelor of Business Administration',
      icon: 'bba'
    },
    {
      code: 'BHM',
      name: 'Bachelor of Hotel Management',
      icon: 'bhm'
    },
    {
      code: 'BBA Finance',
      name: 'BBA in Finance',
      icon: 'bba-f'
    }
  ];

  latestNews = [
    {
      id: 1,
      title: 'Admission Open for 2025',
      excerpt: 'Nepal Western Academy announces admission for BBA, BHM, and BBA Finance programs for the 2025 intake. Join us to shape your future.',
      date: new Date('2025-01-15'),
      image: 'assets/images/news1.jpg'
    },
    {
      id: 2,
      title: 'Industrial Visit to Leading Hotels',
      excerpt: 'BHM students visited top hotels in Kathmandu to gain practical insights into hotel management and operations.',
      date: new Date('2025-01-10'),
      image: 'assets/images/news2.jpg'
    },
    {
      id: 3,
      title: 'Guest Lecture on Banking Sector',
      excerpt: 'Distinguished banker shares insights on modern banking practices and career opportunities in the financial sector.',
      date: new Date('2025-01-05'),
      image: 'assets/images/news3.jpg'
    }
  ];

  upcomingEvents = [
    {
      title: 'Orientation Program',
      date: new Date('2025-02-10'),
      time: '10:00 AM'
    },
    {
      title: 'Career Fair',
      date: new Date('2025-02-20'),
      time: '9:00 AM'
    },
    {
      title: 'Guest Lecture Series',
      date: new Date('2025-03-05'),
      time: '2:00 PM'
    },
    {
      title: 'Industrial Visit',
      date: new Date('2025-03-15'),
      time: '8:00 AM'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Only run interval in browser, not during SSR
    if (isPlatformBrowser(this.platformId)) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  ngOnDestroy() {
    // Clean up interval
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;

    // Reset interval when manually changing slides
    if (isPlatformBrowser(this.platformId) && this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getMonthDay(date: Date) {
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  }
}