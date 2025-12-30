import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramService } from '../../core/services/program.service';
import { NewsService } from '../../core/services/news.service';
import { EventService } from '../../core/services/event.service';
import { Program } from '../../core/models/program.model';
import { News } from '../../core/models/news.model';
import { Event } from '../../core/models/event.model';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ProgramService, NewsService, EventService],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  currentSlide = 0;
  programs: Program[] = [];
  latestNews: News[] = [];
  upcomingEvents: Event[] = [];

  slides = [
    {
      image: 'assets/images/slide1.jpg',
      title: 'NWA College',
      subtitle: 'Take A Tour'
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'NWA College',
      subtitle: 'Take A Tour'
    },
    {
      image: 'assets/images/slide3.jpg',
      title: 'NWA College',
      subtitle: 'Take A Tour'
    }
  ];

  constructor(
    private programService: ProgramService,
    private newsService: NewsService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.loadPrograms();
    this.loadNews();
    this.loadEvents();
    this.startSlideShow();
  }

  loadPrograms(): void {
    this.programService.getPrograms().subscribe(
      programs => this.programs = programs
    );
  }

  loadNews(): void {
    this.newsService.getLatestNews(4).subscribe(
      news => this.latestNews = news
    );
  }

  loadEvents(): void {
    this.eventService.getUpcomingEvents(2).subscribe(
      events => this.upcomingEvents = events
    );
  }

  startSlideShow(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0
      ? this.slides.length - 1
      : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getMonthDay(date: Date): { month: string, day: string } {
    const d = new Date(date);
    return {
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      day: d.getDate().toString().padStart(2, '0')
    };
  }
}