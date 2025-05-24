import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[CommonModule,RouterLinkActive,RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  apiErr: string = '';
  isLoading = false;

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), ]],
    email: ['', [Validators.required, Validators.email]],
    full_name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required,]],
    phone: ['', [Validators.required, ]],
    favorite_genre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  registerSubmit(form: any) {
    if (form.invalid) return;
    this.isLoading = true;

    this.http.post('http://127.0.0.1:8000/api/register/', form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/signin']);
      },
      error: err => {

        this.isLoading = false;
        this.apiErr = err.error.message || 'Username/Email Already Exists';
      }
    });
  }
}
