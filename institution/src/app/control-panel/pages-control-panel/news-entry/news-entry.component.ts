import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsItem } from '../../models-control-panel/news.model';
import { NewsService } from '../../services-control-panel/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SlicePipe],
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.scss']
})
export class NewsEntryComponent implements OnInit, OnDestroy {
  private newsService = inject(NewsService);
  private fb = inject(FormBuilder);

  newsItems: NewsItem[] = [];
  loading = false;
  error: string | null = null;

  newsForm!: FormGroup;
  isEditMode = false;
  editingNewsId: string | null = null;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  isSubmitting = false;

  selectedNews: NewsItem | null = null;
  viewingNews: NewsItem | null = null;

  private deleteModalInstance: any;
  private formModalInstance: any;
  private viewModalInstance: any;

  ngOnInit(): void {
    this.initForm();
    this.loadNews();
  }

  ngOnDestroy(): void {
    this.deleteModalInstance?.dispose?.();
    this.formModalInstance?.dispose?.();
    this.viewModalInstance?.dispose?.();
  }

  initForm(): void {
    this.newsForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      newsURL: ['', [Validators.required]],
      author: ['', Validators.required],
      publishDate: ['', Validators.required]
    });
  }

  loadNews(): void {
    this.loading = true;
    this.error = null;
    this.newsService.getAllNews().subscribe({
      next: (news) => {
        this.newsItems = news.map(item => ({
          ...item,
          imageUrl: this.newsService.getCorrectImageUrl(item.imageUrl)
        }));
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }

  formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  switchToEdit(): void {
    if (!this.viewingNews) return;
    const news = this.viewingNews;
    setTimeout(() => this.openEditModal(news), 350);
  }

  openAddModal(): void {
    this.isEditMode = false;
    this.editingNewsId = null;
    this.resetForm();
    this.showFormModal();
  }

  openEditModal(news: NewsItem): void {
    this.isEditMode = true;
    this.editingNewsId = news.id;
    this.newsForm.patchValue({
      title: news.title,
      description: news.description,
      newsURL: news.newsURL,
      author: news.author,
      publishDate: new Date(news.publishDate).toISOString().split('T')[0]
    });
    this.imagePreview = news.imageUrl ?? null;
    this.showFormModal();
  }

  private showFormModal(): void {
    const modalElement = document.getElementById('newsFormModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      this.formModalInstance = modal;
      modal.show();
    }
  }

  private hideFormModal(): void {
    if (this.formModalInstance) {
      this.formModalInstance.hide();
    } else {
      const el = document.getElementById('newsFormModal');
      (window as any).bootstrap.Modal.getInstance(el)?.hide();
    }
  }

  resetForm(): void {
    this.newsForm.reset();
    this.selectedFile = null;
    this.imagePreview = null;
    this.isSubmitting = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.newsForm.invalid) return;

    this.isSubmitting = true;
    const formValue = this.newsForm.value;
    const publishDate = new Date(formValue.publishDate);

    if (this.isEditMode && this.editingNewsId) {
      const updateData: any = {
        id: this.editingNewsId,
        title: formValue.title,
        description: formValue.description,
        newsURL: formValue.newsURL,
        author: formValue.author,
        publishDate
      };
      if (this.selectedFile) updateData.imageUrl = this.selectedFile;

      this.newsService.updateNews(this.editingNewsId, updateData).subscribe({
        next: (updatedNews) => {
          this.hideFormModal();
          this.resetForm();
          this.isSubmitting = false;
          this.loadNews();
          Swal.fire('Updated!', 'Notice has been updated.', 'success');
        },
        error: (err) => {
          this.error = err.message;
          this.isSubmitting = false;
        }
      });
    } else {
      const createData: any = {
        title: formValue.title,
        description: formValue.description,
        newsURL: formValue.newsURL,
        author: formValue.author,
        publishDate
      };
      if (this.selectedFile) createData.imageUrl = this.selectedFile;

      this.newsService.createNews(createData).subscribe({
        next: (newNews) => {
          this.newsItems.unshift(newNews);
          this.hideFormModal();
          this.resetForm();
          this.isSubmitting = false;
        },
        error: (err) => {
          this.error = err.message;
          this.isSubmitting = false;
        }
      });
    }
  }

  confirmDelete(news: NewsItem): void {
    this.selectedNews = news;
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      this.deleteModalInstance = modal;
      modal.show();
    }
  }

  deleteNews(): void {
    if (!this.selectedNews) return;
    this.newsService.deleteNews(this.selectedNews.id).subscribe({
      next: () => {
        this.newsItems = this.newsItems.filter(n => n.id !== this.selectedNews?.id);
        if (this.deleteModalInstance) {
          this.deleteModalInstance.hide();
        } else {
          const el = document.getElementById('deleteModal');
          (window as any).bootstrap.Modal.getInstance(el)?.hide();
        }
        this.selectedNews = null;
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }

  openUrl(url: string): void {
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  }
}