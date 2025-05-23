// import { Routes } from '@angular/router';
// import { SigninComponent } from './pages/signin/signin.component';
// import { SignupComponent } from './pages/signup/signup.component';
// //import { NotesComponent } from './pages/notes/notes.component';
// import { NotfoundComponent } from './pages/notfound/notfound.component';
// import { userdataGuard } from './userdata.guard';
// import { MoviesComponent } from './pages/movies/movies.component';

// export const routes: Routes = [
//   {path:'', redirectTo:'movies',pathMatch:'full'},
//   {path: 'signin',component:SigninComponent,title:'Sign in'},
//   {path: 'signup',component:SignupComponent,title:'Sign up'},
//    {path: 'movies',component:MoviesComponent,title:'Movies'},
//   //{path: 'notes',canActivate:[userdataGuard],component:NotesComponent,title:'Notes'},
//   {path:'**', component:NotfoundComponent, title:'Page Not Found'}

// ];

import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
//import { SignupComponent } from './pages/signup/signup.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { userdataGuard } from './userdata.guard';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SeatReservationComponent } from './pages/seat-reservation/seat-reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },

  { path: 'signin', component: SigninComponent, title: 'Sign in' },
  { path: 'signup', component: RegisterComponent, title: 'Sign up' },
{ path: 'movie-details', component: MovieDetailComponent ,title: 'Movie Details' },

  { path: 'movies', component: MoviesComponent, title: 'Movies' },
  //{ path: 'movies/:id', component: MovieDetailComponent, title: 'Movie Details' },
  { path: 'reservation/:movieId/:showtimeId', component: SeatReservationComponent, title: 'Seat Reservation' },
  { path: 'profile', component: ProfileComponent },


  // Optional protected route example:
  // { path: 'notes', canActivate: [userdataGuard], component: NotesComponent, title: 'Notes' },

  { path: '**', component: NotfoundComponent, title: 'Page Not Found' }
];

