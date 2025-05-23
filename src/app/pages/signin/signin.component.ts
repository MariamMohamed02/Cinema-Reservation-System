

import { CommonModule } from '@angular/common';
import { AuthorizationService } from './../../core/services/authorization.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authorizationService = inject(AuthorizationService);
  private readonly router = inject(Router);
  isLoading: boolean = false;
  errorMSg:string ='';

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  loginSubmit(form: FormGroup): void {
    if (form.invalid) return;

    this.isLoading = true;

    this.authorizationService.handleLogin(form.value).subscribe({
      next: (res) => {
        this.authorizationService.processLoginToken(res.access); // ✅ Notify subscribers like navbar
        this.router.navigate(['/movies']);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMSg='Incorrect Credentials';
        console.error('Login failed:', err);
        this.isLoading = false;
      }
    });
  }
}
