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
      // Bypass authentication: allow any email format and non-empty password
      setTimeout(() => {
        this.loading = false;
        // Simulate successful login if form is valid
        if (typeof window !== 'undefined') {
          window.location.href = '/home';
        }
      }, 900);
    }
  }
}
