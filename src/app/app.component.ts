import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
//import { NavbarComponent } from './pages/navbar/navbar.component';
//import { NavbarComponent } from './pages/navbar/navbar.component';
//import { NotesComponent } from './pages/notes/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note-new';;
}
