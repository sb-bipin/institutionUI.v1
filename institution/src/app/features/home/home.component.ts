import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.model';
import { EventSchedule } from '../../core/models/event.model';

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
    },
    {
      image: 'assets/images/DSC09282-scaled.jpg',
      title: 'Shape Your Future with Excellence',
    },
    {
      image: 'assets/images/DSC02093-copy-scaled.jpg',
      title: 'Innovation & Leadership Development',
    },
    {
      image: 'assets/images/nwa-clz.jpg',
      title: 'Join Our Vibrant Community',
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

  facilities = [
    {
      icon: 'fa-chalkboard-teacher',
      title: 'Expert Faculty',
      description: 'Nationally recognized teachers with industry experience'
    },
    {
      icon: 'fa-laptop-code',
      title: 'Modern Labs',
      description: 'State-of-the-art computer labs with high-speed internet'
    },
    {
      icon: 'fa-book-reader',
      title: 'Rich Library',
      description: 'Extensive collection with comfortable study spaces'
    },
    {
      icon: 'fa-snowflake',
      title: 'AC Classrooms',
      description: 'Climate-controlled learning environment'
    },
    {
      icon: 'fa-industry',
      title: 'Industrial Visits',
      description: 'Regular field trips and industry exposure'
    },
    {
      icon: 'fa-user-tie',
      title: 'Guest Lectures',
      description: 'Sessions by industry leaders and experts'
    },
    {
      icon: 'fa-briefcase',
      title: 'Internships',
      description: 'Hands-on training opportunities'
    },
    {
      icon: 'fa-globe',
      title: 'Global Opportunities',
      description: 'International internship placements'
    }
  ];

  upcomingEvents: EventSchedule[] = [];
  latestNews: NewsItem[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }

    this.latestNews = this.getNewsItems()
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 3);

    this.upcomingEvents = this.getUpcomingEvents()
      .filter(e => new Date(e.date) >= new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3);
  }
  get currentYear(): number {
    return new Date().getFullYear();
  }
  getUpcomingEvents(): EventSchedule[] {
    return [
      {
        id: 1,
        title: 'Annual Tech Summit 2026',
        description: 'Join us for the biggest technology conference of the year.',
        date: new Date('2026-02-05'),
        time: '9:00 AM - 5:00 PM',
        location: 'Main Auditorium',
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        organizer: 'Tech Department'
      },
      {
        id: 2,
        title: 'AI & Machine Learning Workshop',
        description: 'Hands-on workshop on AI and ML.',
        date: new Date('2026-01-25'),
        time: '2:00 PM - 6:00 PM',
        location: 'Computer Lab 301',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        organizer: 'Dr. Sarah Johnson'
      },
      {
        id: 3,
        title: 'World Lie Day',
        description: 'A day of athletic competitions.',
        date: new Date('2026-04-01'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      },
      {
        id: 4,
        title: 'Annual Sports Day',
        description: 'A day of athletic competitions.',
        date: new Date('2026-04-15'),
        time: '8:00 AM - 6:00 PM',
        location: 'Athletic Stadium',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        organizer: 'Sports Department'
      }
    ];
  }

  getNewsItems(): NewsItem[] {
    return [
      {
        id: 1,
        title: 'New Computer Science Program Launches This Fall',
        excerpt: 'Our institution is proud to announce the launch of an innovative Computer Science program featuring AI and Machine Learning specializations.',
        content: 'Full article content here...',
        author: 'Dr. Sarah Johnson',
        publishDate: new Date('2024-01-10'),
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      },
      {
        id: 2,
        title: 'Annual Science Fair: Students Showcase Groundbreaking Projects',
        excerpt: 'Over 200 students participated in our annual science fair, presenting innovative projects across various scientific disciplines.',
        content: 'Full article content here...',
        author: 'Prof. Michael Chen',
        publishDate: new Date('2024-01-08'),
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
      },
      {
        id: 3,
        title: 'Campus Receives State-of-the-Art Learning Technology Grant',
        excerpt: 'A $2 million grant will fund new digital learning tools and smart classroom technology across campus.',
        content: 'Full article content here...',
        author: 'Admin Office',
        publishDate: new Date('2024-01-05'),
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      }
    ];
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;

    if (isPlatformBrowser(this.platformId) && this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  formatDate(date: Date): string {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  }

  getMonthDay(date: Date) {
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}