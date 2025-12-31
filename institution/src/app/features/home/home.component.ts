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
      image: 'assets/images/slider1.jpg',
      title: 'Welcome to Nepal Western Academy',
      subtitle: 'Excellence in Business Education'
    },
    {
      image: 'assets/images/slider2.jpg',
      title: 'Shape Your Future',
      subtitle: 'Quality Education & Professional Development'
    },
    {
      image: 'assets/images/slider3.jpg',
      title: 'Innovation & Leadership',
      subtitle: 'Empowering Tomorrow\'s Leaders'
    }
  ];

  programs = [
    { code: 'BBA', name: 'Bachelor of Business Administration', icon: 'bba' },
    { code: 'BHM', name: 'Bachelor of Hotel Management', icon: 'bhm' },
    { code: 'BBA Finance', name: 'BBA in Finance', icon: 'bba-finance' }
  ];

  latestNews = [
    {
      id: 1,
      title: 'Admission Open for 2025',
      excerpt: 'Nepal Western Academy announces admission for BBA, BHM, and BBA Finance programs.',
      date: new Date('2025-01-15'),
      image: 'assets/images/news1.jpg'
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
      day: date.getDate().toString(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  }
}