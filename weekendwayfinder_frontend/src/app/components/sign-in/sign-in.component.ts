/* global setTimeout, window */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * PUBLIC_INTERFACE
 * SignInComponent displays sign-in page and handles authentication form logic.
 */
@Component({
  selector: 'ww-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  loading = false;
  error: string | null = null;
  form: FormGroup;

  constructor() {
    const fb = new FormBuilder();
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // PUBLIC_INTERFACE
  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.error = null;
      // Simulate authentication here. Replace with real backend call.
      setTimeout(() => {
        this.loading = false;
        if (
          this.form.value.email === 'demo@weekend.com' &&
          this.form.value.password === 'weekend'
        ) {
          // Use router navigation if available, else fallback to location
          if (typeof window !== 'undefined') {
            window.location.href = '/home';
          }
        } else {
          this.error = 'Invalid email or password';
        }
      }, 1200);
    }
  }
}
