import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services-control-panel/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('canvasContainer') canvasRef!: ElementRef;

  showPassword = false;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value as any).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          this.router.navigate(['/dashboard']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          timer: 1500,
          showConfirmButton: false,
          text: err?.error?.errors?.[0] || 'Invalid credentials',
        });
      }
    });
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}