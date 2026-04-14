import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { GalleryItem } from '../../models-control-panel/gallery-item.model';
import { GalleryService } from '../../services-control-panel/gallery.service';

interface Notice {
  id: string;
  title: string;
  createdAt: Date;
  status: 'Published' | 'Draft';
}

interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private galleryService = inject(GalleryService);

  recentImages = signal<GalleryItem[]>([]);
  recentNotices = signal<Notice[]>([]);
  upcomingEvents = signal<Event[]>([]);
  stats = signal({
    totalImages: 0,
    activeNotices: 0,
    upcomingEventsCount: 0,
    totalVisitors: 0
  });

  isLoading = signal({
    images: true,
    notices: true,
    events: true
  });

  ngOnInit(): void {
    this.loadRecentImages();
    this.loadNotices();
    this.loadEvents();
    this.loadStats();
  }

  loadRecentImages(): void {
    this.isLoading.update(v => ({ ...v, images: true }));
    this.galleryService.getAll().subscribe({
      next: (items) => {
        const fixedItems = items.map(item => ({
          ...item,
          imageUrl: this.galleryService.getCorrectImageUrl(item.imageUrl)
        }));
        this.recentImages.set(fixedItems.slice(0, 5));
        this.isLoading.update(v => ({ ...v, images: false }));
      },
      error: (err) => {
        console.error(err);
        this.isLoading.update(v => ({ ...v, images: false }));
      }
    });
  }

  loadNotices(): void {
    setTimeout(() => {
      this.recentNotices.set([
        { id: '1', title: 'Holiday on 15th August', createdAt: new Date(), status: 'Published' },
        { id: '2', title: 'Mid-term exam schedule released', createdAt: new Date(), status: 'Draft' },
        { id: '3', title: 'Faculty meeting on Friday', createdAt: new Date(), status: 'Published' }
      ]);
      this.isLoading.update(v => ({ ...v, notices: false }));
    }, 500);
  }

  loadEvents(): void {
    setTimeout(() => {
      this.upcomingEvents.set([
        { id: '1', title: 'Tech Fest 2026', date: new Date(2026, 7, 25), location: 'Main Auditorium' },
        { id: '2', title: 'Parent-Teacher Meeting', date: new Date(2026, 8, 5), location: 'Online' },
        { id: '3', title: 'Sports Day Registration', date: new Date(2026, 8, 12), location: 'Last date to register' }
      ]);
      this.isLoading.update(v => ({ ...v, events: false }));
    }, 500);
  }

  loadStats(): void {
    this.galleryService.getAll().subscribe(items => {
      this.stats.update(s => ({ ...s, totalImages: items.length }));
    });
    // Set other stats (can be replaced with real data later)
    this.stats.update(s => ({
      ...s,
      activeNotices: 23,
      upcomingEventsCount: 8,
      totalVisitors: 4200
    }));
  }

  deleteImage(id: string): void {
    Swal.fire({
      title: 'Delete image?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete'
    }).then(result => {
      if (result.isConfirmed) {
        this.galleryService.delete(id).subscribe({
          next: () => {
            this.recentImages.update(images => images.filter(img => img.id !== id));
            Swal.fire('Deleted!', 'Image removed from gallery.', 'success');
          },
          error: () => Swal.fire('Error', 'Could not delete image', 'error')
        });
      }
    });
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    return `${diffDays} days ago`;
  }
}