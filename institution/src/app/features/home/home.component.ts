import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsItem } from '../../core/models/news.model';

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
      },
      {
        id: 4,
        title: 'Research Team Makes Breakthrough in Renewable Energy',
        excerpt: 'Our research department has developed a new solar panel technology that increases efficiency by 40%.',
        content: 'Full article content here...',
        author: 'Dr. Emily Rodriguez',
        publishDate: new Date('2024-01-03'),
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop',
      },
      {
        id: 5,
        title: 'Spring Semester Registration Opens Next Week',
        excerpt: 'Students can begin registering for spring semester courses starting January 15th. New courses added in Business and Arts.',
        content: 'Full article content here...',
        author: 'Registrar Office',
        publishDate: new Date('2024-01-02'),
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
      },
      {
        id: 6,
        title: 'Virtual Reality Lab Opens for Student Innovation',
        excerpt: 'Experience the future of learning in our new VR lab, equipped with cutting-edge technology for immersive education.',
        content: 'Full article content here...',
        author: 'Tech Department',
        publishDate: new Date('2023-12-28'),
        imageUrl: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=500&fit=crop',
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

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

}