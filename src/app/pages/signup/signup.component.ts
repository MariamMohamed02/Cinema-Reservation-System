// import { SignupComponent } from './signup.component';
// // import { AuthorizationService } from './../../core/services/authorization.service';
// // import { authorization } from './../../core/interfaces/authorization';
// // import { Component, inject } from '@angular/core';
// // import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// // import { Router, RouterModule } from '@angular/router';

// // @Component({
// //   selector: 'app-signup',
// //   standalone: true,
// //   imports: [ReactiveFormsModule,RouterModule],
// //   templateUrl: './signup.component.html',
// //   styleUrl: './signup.component.css'
// // })
// // export class SignupComponent {
// //   private readonly authorizationService =inject(AuthorizationService);
// //   private readonly router =inject(Router);

// //   apiErr:string='';
// //   isLoading : boolean=false;



// //   registerForm:FormGroup=new FormGroup({
// //     name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)],),
// //     email:new FormControl('',[Validators.required,Validators.email],),
// //     password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)],),
// //     phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)],),
// //     age:new FormControl('',[Validators.required],),

// //   })

// //   // registerSubmit(form:FormGroup){
// //   //   this.isLoading=true
// //   //   this.authorizationService.handleRegister(form.value).subscribe({
// //   //     next:(res)=>{
// //   //       console.log(res);
// //   //       this.router.navigate(['/signin'])
// //   //     },
// //   //     error:(err)=>{
// //   //       console.log(err);
// //   //       this.apiErr=err.error.msg;
// //   //       this.isLoading=false


// //   //     }
// //   //   })

// //  // }

// // }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   standalone:true,
//   imports:[],
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   apiErr: string = '';
//   isLoading = false;

//   registerForm = this.fb.group({
//     username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
//     email: ['', [Validators.required, Validators.email]],
//     full_name: ['', [Validators.required, Validators.minLength(3)]],
//     password: ['', [Validators.required, Validators.pattern(/^.{6,}$/)]],
//     phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
//     favorite_genre: ['', Validators.required]
//   });

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

//   registerSubmit(form: any) {
//     if (form.invalid) return;
//     this.isLoading = true;

//     this.http.post('https://your-backend.com/api/register/', form.value).subscribe({
//       next: () => {
//         this.isLoading = false;
//         this.router.navigate(['/signin']);
//       },
//       error: err => {
//         this.isLoading = false;
//         this.apiErr = err.error.message || 'Something went wrong. Please try again.';
//       }
//     });
//   }
// }
