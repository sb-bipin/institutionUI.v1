import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { GalleryItem } from '../../models-control-panel/gallery-item.model';
import { GalleryService } from '../../services-control-panel/gallery.service';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private galleryService = inject(GalleryService);

  items = signal<GalleryItem[]>([]);
  previewUrl = signal<string | null>(null);
  isSubmitting = signal(false);
  isLoading = signal(true);
  errorMessage = signal<string | null>(null);
  lightboxItem = signal<GalleryItem | null>(null);

  isEditing = signal(false);
  editingItem = signal<GalleryItem | null>(null);
  editPreviewUrl = signal<string | null>(null);
  editImageFile = signal<File | null>(null);

  form = {
    title: '',
    description: '',
    imageFile: null as File | null
  };

  editForm = {
    title: '',
    description: '',
    imageFile: null as File | null
  };

  private readonly API = `${environment.apiBaseUrl}`;
  private apiUrl = `${this.API}/ImageGallery`;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.isLoading.set(true);
    this.galleryService.getAll().subscribe({
      next: (items) => {
        const fixedItems = items.map(item => ({
          ...item,
          imageUrl: this.galleryService.getCorrectImageUrl(item.imageUrl)
        }));
        this.items.set(fixedItems);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load gallery items', err);
        this.errorMessage.set('Could not load images. Please refresh the page.');
        this.isLoading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Load Failed',
          text: 'Could not load gallery images. Please refresh the page.',
          confirmButtonColor: '#d33'
        });
      }
    });
  }

  openEditModal(item: GalleryItem): void {
    this.editingItem.set(item);
    this.editForm.title = item.title;
    this.editForm.description = item.description || '';
    this.editForm.imageFile = null;
    this.editPreviewUrl.set(item.imageUrl);
    this.isEditing.set(true);
  }

  closeEditModal(): void {
    this.isEditing.set(false);
    this.editingItem.set(null);
    this.editForm.title = '';
    this.editForm.description = '';
    this.editForm.imageFile = null;
    this.editPreviewUrl.set(null);
  }

  onEditFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.editForm.imageFile = file;
    const reader = new FileReader();
    reader.onload = () => this.editPreviewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  updateItem(): void {
    const item = this.editingItem();
    if (!item) return;

    const formData = new FormData();
    formData.append('Id', item.id);
    formData.append('Title', this.editForm.title.trim());
    formData.append('Description', this.editForm.description.trim());
    if (this.editForm.imageFile) {
      formData.append('ImageFile', this.editForm.imageFile);
    }

    this.isSubmitting.set(true);
    this.galleryService.update(item.id, formData).subscribe({
      next: (updatedItem) => {
        const fixedItem = {
          ...updatedItem,
          imageUrl: this.galleryService.getCorrectImageUrl(updatedItem.imageUrl)
        };
        this.items.update(prev => prev.map(i => i.id === item.id ? fixedItem : i));
        this.closeEditModal();
        this.isSubmitting.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Image details have been updated.',
          timer: 1500,
          showConfirmButton: false
        });
      },
      error: (err) => {
        console.error('Update failed', err);
        let errorMsg = 'Update failed. ';
        if (err.error?.errors) {
          errorMsg += err.error.errors.join(', ');
        } else if (err.error?.message) {
          errorMsg += err.error.message;
        } else {
          errorMsg += 'Please try again.';
        }
        this.isSubmitting.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: errorMsg,
          confirmButtonColor: '#d33'
        });
      }
    });
  }


  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.form.imageFile = file;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    (event.currentTarget as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent): void {
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    (event.currentTarget as HTMLElement).classList.remove('drag-over');
    const file = event.dataTransfer?.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    this.form.imageFile = file;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  isFormValid(): boolean {
    return !!this.form.title.trim() && !!this.form.imageFile && !!this.form.description.trim();
  }

  submit(): void {
    if (!this.isFormValid() || !this.previewUrl()) return;
    this.isSubmitting.set(true);
    const formData = new FormData();
    formData.append('Title', this.form.title.trim());
    formData.append('Description', this.form.description.trim());
    formData.append('ImageFile', this.form.imageFile!);
    this.galleryService.create(formData).subscribe({
      next: (newItem) => {
        const fixedItem = {
          ...newItem,
          imageUrl: this.galleryService.getCorrectImageUrl(newItem.imageUrl)
        };
        this.items.update(prev => [fixedItem, ...prev]);
        this.form = { title: '', description: '', imageFile: null };
        this.previewUrl.set(null);
        this.isSubmitting.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Upload Successful!',
          text: `"${newItem.title}" has been added to the gallery.`,
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (err) => {
        console.error('Upload failed', err);
        let errorMsg = 'Upload failed. ';
        if (err.error?.errors) {
          errorMsg += err.error.errors.join(', ');
        } else if (err.error?.message) {
          errorMsg += err.error.message;
        } else {
          errorMsg += 'Please check file size/format.';
        }
        this.isSubmitting.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: errorMsg,
          confirmButtonColor: '#d33'
        });
      }
    });
  }

  removeItem(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "This image will be permanently deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.galleryService.delete(id).subscribe({
          next: () => {
            this.items.update(prev => prev.filter(i => i.id !== id));
            if (this.lightboxItem()?.id === id) this.lightboxItem.set(null);
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'The image has been removed from the gallery.',
              timer: 1500,
              showConfirmButton: false
            });
          },
          error: (err) => {
            console.error('Delete failed', err);
            Swal.fire({
              icon: 'error',
              title: 'Delete Failed',
              text: 'Unable to delete the image. Please try again.',
              confirmButtonColor: '#d33'
            });
          }
        });
      }
    });
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
  }
}