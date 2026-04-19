import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Events } from '../../models-control-panel/events.model';
import { EventService } from '../../services-control-panel/events.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Events[] = [];
  loading = true;
  isEditMode = false;
  selectedEventId?: string;
  eventForm: FormGroup;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  formSubmitting = false;
  private modalInstance: any;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) {
    this.eventForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      organizer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: () => {
        Swal.fire('Error', 'Failed to load events', 'error');
        this.loading = false;
      }
    });
  }

  openCreateModal() {
    this.isEditMode = false;
    this.selectedEventId = undefined;
    this.eventForm.reset();
    this.selectedImage = null;
    this.imagePreview = null;
    this.showModal();
  }

  openEditModal(event: Events) {
    this.isEditMode = true;
    this.selectedEventId = event.id;

    const dateValue = event.date ? new Date(event.date).toISOString().split('T')[0] : '';

    this.eventForm.patchValue({
      id: this.selectedEventId,
      title: event.title,
      description: event.description,
      date: dateValue,
      time: event.time,
      location: event.location,
      organizer: event.organizer
    });

    this.imagePreview = event.imageUrl || null;
    this.selectedImage = null;

    this.showModal();
  }

  showModal() {
    const modalElement = document.getElementById('eventModal');
    if (modalElement) {
      this.modalInstance = new (window as any).bootstrap.Modal(modalElement);
      this.modalInstance.show();
    }
  }

  hideModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      const reader = new FileReader();
      reader.onload = (e) => (this.imagePreview = e.target?.result ?? null);
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.eventForm.invalid) {
      Swal.fire('Validation Error', 'Please fill all required fields', 'error');
      return;
    }

    const formData = new FormData();
    Object.keys(this.eventForm.value).forEach(key => {
      formData.append(key, this.eventForm.value[key]);
    });
    if (this.selectedImage) {
      formData.append('ImageFile', this.selectedImage);
    }

    this.formSubmitting = true;

    const request = this.isEditMode
      ? this.eventService.updateEvent(this.selectedEventId!, formData)
      : this.eventService.createEvent(formData);

    request.subscribe({
      next: (updatedEvent) => {
        Swal.fire('Success', `Event ${this.isEditMode ? 'updated' : 'created'}!`, 'success');
        this.hideModal();
        this.loadEvents(); // Reload to get fresh data including new image URL
        this.formSubmitting = false;
      },
      error: (err) => {
        console.error(err);
        Swal.fire('Error', err.error?.message || 'Operation failed', 'error');
        this.formSubmitting = false;
      }
    });
  }

  deleteEvent(id: string, title: string) {
    Swal.fire({
      title: 'Delete event?',
      text: `Are you sure you want to delete "${title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEvent(id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Event has been deleted.', 'success');
            this.loadEvents();
          },
          error: () => Swal.fire('Error', 'Could not delete event', 'error')
        });
      }
    });
  }
}