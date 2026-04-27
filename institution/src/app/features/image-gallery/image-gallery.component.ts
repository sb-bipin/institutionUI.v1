import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../core/models/image-gallery.model';
import { GalleryService } from '../../control-panel/services-control-panel/gallery.service';


@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-3">
      <div class="section-header text-center mb-4">
        <h2 class="section-title">🖼️ Image Gallery</h2>
        <p class="section-subtitle">
          Explore our beautiful collection of stunning imagery
        </p>
      </div>

      <div class="row g-4">
        <div class="col-12 col-sm-6 col-lg-4" *ngFor="let image of images">
          <div class="gallery-item" (click)="openModal(image)">
            <div class="gallery-image-wrapper">
              <img [src]="image.url" [alt]="image.title" class="gallery-image">
              <div class="gallery-overlay">
                <div class="overlay-content">
                  <i class="bi bi-zoom-in fs-1 text-white mb-2"></i>
                  <h5 class="text-white fw-bold">{{ image.title }}</h5>
                  <p class="text-white-50 small mb-0">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" [class.show]="selectedImage" [style.display]="selectedImage ? 'block' : 'none'" 
           tabindex="-1" (click)="closeModal()">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content bg-dark" (click)="$event.stopPropagation()">
            <div class="modal-header border-0">
              <h5 class="modal-title text-white">{{ selectedImage?.title }}</h5>
              <button type="button" class="btn-close btn-close-white" (click)="closeModal()"></button>
            </div>
            <div class="modal-body p-0">
              <img [src]="selectedImage?.url" [alt]="selectedImage?.title" class="img-fluid w-100">
            </div>
            <div class="modal-footer border-0 bg-dark">
              <p class="text-white-50 mb-0">{{ selectedImage?.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade" [class.show]="selectedImage" *ngIf="selectedImage"></div>
    </div>
  `,
  styles: [`
    .gallery-item {
      cursor: pointer;
      height: 280px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .gallery-image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .gallery-item:hover .gallery-image {
      transform: scale(1.1);
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .overlay-content {
      text-align: center;
      padding: 20px;
      transform: translateY(20px);
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .overlay-content {
      transform: translateY(0);
    }

    .modal.show {
      background: rgba(0, 0, 0, 0.8);
    }

    .modal-backdrop.show {
      opacity: 0.8;
    }

    .modal-content {
      border: none;
      border-radius: 12px;
      overflow: hidden;
    }

    .modal-body img {
      border-radius: 0;
    }

    @media (max-width: 576px) {
      .gallery-item {
        height: 220px;
      }
      
      .display-4 {
        font-size: 2rem;
      }
    }
    
.section-header {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}

.section-title {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.5px;
    margin-bottom: 0.4rem;
}

.section-subtitle {
    font-size: clamp(0.95rem, 1.4vw, 1.05rem);
    color: #6c757d;
    line-height: 1.6;
}

.section-header::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #0d6efd, #6610f2);
    border-radius: 2px;
    margin: 0.75rem auto 0;
}

  `]
})
export class ImageGalleryComponent implements OnInit {
  selectedImage: GalleryImage | null = null;
  private galleryService = inject(GalleryService);

  images: GalleryImage[] = [];
  isLoading = signal(false);

  private dummyImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Mountain Landscape',
      description: 'Breathtaking view of snow-capped mountains at sunset'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?w=800&q=80',
      title: 'Forest Path',
      description: 'Serene forest trail surrounded by tall trees'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      title: 'Ocean Paradise',
      description: 'Crystal clear turquoise waters and sandy beach'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      title: 'Misty Lake',
      description: 'Tranquil lake surrounded by fog and mountains'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      title: 'Autumn Colors',
      description: 'Vibrant fall foliage reflecting on water'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80',
      title: 'Desert Dunes',
      description: 'Golden sand dunes under blue sky'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      title: 'Alpine Vista',
      description: 'Majestic peaks and rolling hills'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      title: 'Woodland Stream',
      description: 'Peaceful creek flowing through forest'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      title: 'Canyon View',
      description: 'Dramatic rock formations and vast landscape'
    }
  ];

  ngOnInit(): void {
    this.loadRecentImages();
  }

  loadRecentImages(): void {
    this.isLoading.set(true);

    this.galleryService.getAll().subscribe({
      next: (apiItems) => {
        const apiImages: GalleryImage[] = apiItems.map((item: any) => ({
          id: item.id,
          url: this.galleryService.getCorrectImageUrl(item.imageUrl),
          title: item.title || 'Untitled',
          description: item.description || ''
        }));

        this.images = [...apiImages, ...this.dummyImages];
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load images from API', err);
        this.images = [...this.dummyImages];
        this.isLoading.set(false);
      }
    });
  }

  openModal(image: GalleryImage): void {
    this.selectedImage = image;
    document.body.classList.add('modal-open');
  }

  closeModal(): void {
    this.selectedImage = null;
    document.body.classList.remove('modal-open');
  }
}

