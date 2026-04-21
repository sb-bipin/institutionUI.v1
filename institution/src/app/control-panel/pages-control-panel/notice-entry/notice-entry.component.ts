import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Notice, UpdateNoticeDto, CreateNoticeDto } from '../../models-control-panel/notice.model';
import { NoticeService } from '../../services-control-panel/notice.service';

@Component({
  selector: 'app-notice-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notice-entry.component.html',
  styleUrls: ['./notice-entry.component.scss']
})
export class NoticeEntryComponent implements OnInit, OnDestroy {
  private noticeService = inject(NoticeService);
  private fb = inject(FormBuilder);

  notices: Notice[] = [];
  loading = false;
  error: string | null = null;

  noticeForm!: FormGroup;
  isEditMode = false;
  editingNoticeId: string | null = null;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  isSubmitting = false;

  private formModalInstance: any;

  ngOnInit(): void {
    this.initForm();
    this.loadNotices();
  }

  ngOnDestroy(): void {
    if (this.formModalInstance) this.formModalInstance?.dispose?.();
  }

  initForm(): void {
    this.noticeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      important: [false]
    });
  }

  loadNotices(): void {
    this.loading = true;
    this.error = null;
    this.noticeService.getAllNotices().subscribe({
      next: (data) => {
        const fixedItems = data.map(notice => ({
          ...notice,
          imageUrl: this.noticeService.getCorrectImageUrl(notice.imageUrl)
        }));
        this.notices = fixedItems;
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

  openAddModal(): void {
    this.isEditMode = false;
    this.editingNoticeId = null;
    this.resetForm();
    this.showFormModal();
  }

  openEditModal(notice: Notice): void {
    this.isEditMode = true;
    this.editingNoticeId = notice.id;
    this.noticeForm.patchValue({
      title: notice.title,
      description: notice.description,
      date: new Date(notice.date).toISOString().split('T')[0],
      important: notice.important
    });
    if (notice.imageUrl) {
      this.imagePreview = notice.imageUrl;
    }
    this.showFormModal();
  }

  private showFormModal(): void {
    const modalElement = document.getElementById('noticeFormModal');
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
      const modalElement = document.getElementById('noticeFormModal');
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }

  resetForm(): void {
    this.noticeForm.reset({ important: false });
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
    if (this.noticeForm.invalid) return;

    this.isSubmitting = true;
    const formValue = this.noticeForm.value;
    const dateObj = new Date(formValue.date);

    if (this.isEditMode && this.editingNoticeId) {
      const updateData: UpdateNoticeDto = {
        id: this.editingNoticeId,
        title: formValue.title,
        description: formValue.description,
        date: dateObj,
        important: formValue.important
      };
      if (this.selectedFile) {
        updateData.imageFile = this.selectedFile;
      }
      this.noticeService.updateNotice(this.editingNoticeId, updateData).subscribe({
        next: (updated) => {
          this.hideFormModal();
          this.resetForm();
          this.isSubmitting = false;
          this.loadNotices();
          Swal.fire('Updated!', 'Notice has been updated.', 'success');
        },
        error: (err) => {
          this.error = err.message;
          this.isSubmitting = false;
          Swal.fire('Error', err.message, 'error');
        }
      });
    } else {
      const createData: CreateNoticeDto = {
        title: formValue.title,
        description: formValue.description,
        date: dateObj,
        important: formValue.important
      };
      if (this.selectedFile) {
        createData.imageFile = this.selectedFile;
      }
      this.noticeService.createNotice(createData).subscribe({
        next: (newNotice) => {
          this.notices.unshift(newNotice);
          this.hideFormModal();
          this.resetForm();
          this.isSubmitting = false;
          Swal.fire('Created!', 'Notice has been created.', 'success');
        },
        error: (err) => {
          this.error = err.message;
          this.isSubmitting = false;
          Swal.fire('Error', err.message, 'error');
        }
      });
    }
  }

  confirmDelete(notice: Notice): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete "${notice.title}". This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.noticeService.deleteNotice(notice.id).subscribe({
          next: () => {
            this.notices = this.notices.filter(n => n.id !== notice.id);
            Swal.fire('Deleted!', 'Notice has been deleted.', 'success');
          },
          error: (err) => {
            Swal.fire('Error', err.message, 'error');
          }
        });
      }
    });
  }
}