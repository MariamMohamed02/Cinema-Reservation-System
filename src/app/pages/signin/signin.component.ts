import { AuthorizationService } from './../../core/services/authorization.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
private readonly formBuilder=inject(FormBuilder);
private readonly authorizationService=inject(AuthorizationService)
private readonly router=inject(Router)
isLoading:boolean=false;

loginForm:FormGroup=this.formBuilder.group({
  username:['',[Validators.required]],
  password: ['',[Validators.required ]]
})

loginSubmit(form: FormGroup):void{
  this.isLoading=true
  this.authorizationService.handleLogin(form.value).subscribe({
    next:(res)=>{
      localStorage.setItem('token',res.access)
      this.router.navigate(['/movies'])
    },
    error:(err)=>{
      this.isLoading=false
    }
  })

}
}
