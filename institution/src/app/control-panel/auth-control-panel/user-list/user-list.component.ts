import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services-control-panel/user.service';
import {
  User,
  UserStatus,
  CreateUserForm,
  EditUserForm,
  ResetPasswordForm
} from '../../models-control-panel/user.model';

interface Toast {
  message: string;
  type: 'success' | 'error';
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  // ── State ────────────────────────────────────────────────
  users = signal<User[]>([]);
  searchQuery = signal('');
  isLoading = signal(false);
  toast = signal<Toast | null>(null);

  showCreateModal = signal(false);
  showViewModal = signal(false);
  showEditModal = signal(false);
  showResetModal = signal(false);
  selectedUser = signal<User | null>(null);

  createForm = signal<CreateUserForm>({
    firstName: '', lastName: '', username: '', email: '', password: '', status: 'active'
  });

  editForm = signal<EditUserForm>({
    id: '', name: '', firstName: '', lastName: '', username: '', email: '', status: 'active'
  });

  resetForm = signal<ResetPasswordForm>({
    userId: '', newPassword: '', confirm: ''
  });

  // ── Computed ─────────────────────────────────────────────
  filteredUsers = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.users();
    return this.users().filter(u =>
      u.name.toLowerCase().includes(q) ||
      u.username.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    );
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // ── Helpers ──────────────────────────────────────────────
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  private showToast(message: string, type: 'success' | 'error'): void {
    this.toast.set({ message, type });
    setTimeout(() => this.toast.set(null), 3500);
  }

  // ── Load ─────────────────────────────────────────────────
  loadUsers(): void {
    this.isLoading.set(true);
    this.userService.getAllUsers().subscribe({
      next: users => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: () => {
        this.showToast('Failed to load users.', 'error');
        this.isLoading.set(false);
      }
    });
  }

  // ── Create ───────────────────────────────────────────────
  openCreate(): void {
    this.createForm.set({ firstName: '', lastName: '', username: '', email: '', password: '', status: 'active' });
    this.showCreateModal.set(true);
  }

  submitCreate(): void {
    const f = this.createForm();
    if (!f.firstName || !f.lastName || !f.email || !f.username || !f.password) {
      this.showToast('Please fill all required fields.', 'error');
      return;
    }
    this.isLoading.set(true);
    this.userService.registerUser({
      username: f.username,
      email: f.email,
      password: f.password,
      firstName: f.firstName,
      lastName: f.lastName
    }).subscribe({
      next: res => {
        if (res.success) {
          this.showToast('User created successfully!', 'success');
          this.showCreateModal.set(false);
          this.loadUsers();
        }
        this.isLoading.set(false);
      },
      error: err => {
        this.showToast(err?.error?.message || 'Registration failed.', 'error');
        this.isLoading.set(false);
      }
    });
  }

  updateCreateField<K extends keyof CreateUserForm>(key: K, value: CreateUserForm[K]): void {
    this.createForm.update(f => ({ ...f, [key]: value }));
  }

  // ── View ─────────────────────────────────────────────────
  openView(user: User): void {
    this.selectedUser.set(user);
    this.showViewModal.set(true);
  }

  // ── Edit ─────────────────────────────────────────────────
  openEdit(user: User): void {
    this.editForm.set({ ...user, newPassword: '' });
    this.selectedUser.set(user);
    this.showEditModal.set(true);
  }

  submitEdit(): void {
    const f = this.editForm();
    if (!f.firstName || !f.lastName || !f.email || !f.username) {
      this.showToast('Please fill all required fields.', 'error');
      return;
    }
    this.isLoading.set(true);
    this.userService.updateUser({
      id: f.id,
      firstName: f.firstName,
      lastName: f.lastName,
      userName: f.username,
      email: f.email
    }).subscribe({
      next: res => {
        if (res.success) {
          this.showToast('User updated successfully!', 'success');
          this.showEditModal.set(false);
          this.loadUsers();
        }
        this.isLoading.set(false);
      },
      error: err => {
        this.showToast(err?.error?.message || 'Update failed.', 'error');
        this.isLoading.set(false);
      }
    });
  }

  updateEditField<K extends keyof EditUserForm>(key: K, value: EditUserForm[K]): void {
    this.editForm.update(f => ({ ...f, [key]: value }));
  }

  // ── Reset Password ────────────────────────────────────────
  openResetPassword(user: EditUserForm): void {
    this.resetForm.set({ userId: user.id, newPassword: '', confirm: '' });
    this.showResetModal.set(true);
    this.showEditModal.set(false);
  }

  submitResetPassword(): void {
    const f = this.resetForm();
    if (!f.newPassword || f.newPassword !== f.confirm) {
      this.showToast('Passwords do not match.', 'error');
      return;
    }
    this.isLoading.set(true);
    this.userService.resetPassword({ userId: f.userId, newPassword: f.newPassword }).subscribe({
      next: res => {
        if (res.success) {
          this.showToast('Password reset successfully!', 'success');
          this.showResetModal.set(false);
        }
        this.isLoading.set(false);
      },
      error: err => {
        this.showToast(err?.error?.message || 'Password reset failed.', 'error');
        this.isLoading.set(false);
      }
    });
  }

  updateResetField<K extends keyof ResetPasswordForm>(key: K, value: string): void {
    this.resetForm.update(f => ({ ...f, [key]: value }));
  }

  // ── Close ─────────────────────────────────────────────────
  closeAll(): void {
    this.showCreateModal.set(false);
    this.showViewModal.set(false);
    this.showEditModal.set(false);
    this.showResetModal.set(false);
  }
}