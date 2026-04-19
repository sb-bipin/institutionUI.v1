import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItem } from '../../core/models/news.model';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];
  selectedCategory: string = 'all';
  categories: string[] = ['all', 'Academic', 'Events', 'Technology', 'Research'];

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsItems = this.getDummyNews();
  }

  getDummyNews(): NewsItem[] {
    return [
      {
        id: 1,
        title: 'New Computer Science Program Launches This Fall',
        description: 'Our institution is proud to announce the launch of an innovative Computer Science program featuring AI and Machine Learning specializations.',
        author: 'Dr. Sarah Johnson',
        publishDate: new Date('2024-01-10'),
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      },
      {
        id: 2,
        title: 'Annual Science Fair: Students Showcase Groundbreaking Projects',
        description: 'Over 200 students participated in our annual science fair, presenting innovative projects across various scientific disciplines.',
        author: 'Prof. Michael Chen',
        publishDate: new Date('2024-01-08'),
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
      },
      {
        id: 3,
        title: 'Campus Receives State-of-the-Art Learning Technology Grant',
        description: 'A $2 million grant will fund new digital learning tools and smart classroom technology across campus.',
        author: 'Admin Office',
        publishDate: new Date('2024-01-05'),
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
      },
      {
        id: 4,
        title: 'Research Team Makes Breakthrough in Renewable Energy',
        description: 'Our research department has developed a new solar panel technology that increases efficiency by 40%.',
        author: 'Dr. Emily Rodriguez',
        publishDate: new Date('2024-01-03'),
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop',
      },
      {
        id: 5,
        title: 'Spring Semester Registration Opens Next Week',
        description: 'Students can begin registering for spring semester courses starting January 15th. New courses added in Business and Arts.',
        author: 'Registrar Office',
        publishDate: new Date('2024-01-02'),
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
      },
      {
        id: 6,
        title: 'Virtual Reality Lab Opens for Student Innovation',
        description: 'Experience the future of learning in our new VR lab, equipped with cutting-edge technology for immersive education.',
        author: 'Tech Department',
        publishDate: new Date('2023-12-28'),
        imageUrl: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=500&fit=crop',
      }
    ];
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
}