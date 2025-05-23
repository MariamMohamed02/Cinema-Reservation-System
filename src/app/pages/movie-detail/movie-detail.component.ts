// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-movie-details',
//   standalone:true,
//   imports:[CommonModule],
//   templateUrl: './movie-detail.component.html',
//   styleUrls: ['./movie-detail.component.css', '../movies/movies.component.css']
// })
// export class MovieDetailComponent implements OnInit {
//   movie: any;

//   constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     this.movie = nav?.extras?.state?.['movie'];

//     if (!this.movie) {
//       this.router.navigate(['/']);
//     }
//   }

//   ngOnInit(): void {
//     console.log('Movie received:', this.movie);
//   }

//   goToReservation(time: string) {
//     console.log(`Reserved for time: ${time}`);
//     // You can navigate to a reservation page here and pass the time/movie if needed
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css', '../movies/movies.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  availableShowtimes: any[] = [];
  showtimeError: string | null = null;

  constructor(private router: Router, private http: HttpClient) {
    const nav = this.router.getCurrentNavigation();
    this.movie = nav?.extras?.state?.['movie'];

    if (!this.movie) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    console.log('Movie received:', this.movie);
    this.fetchAvailableShowtimes();
  }

  fetchAvailableShowtimes(): void {
    const url = `http://127.0.0.1:8000/api/movies/${this.movie.id}/available-showtimes/`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.availableShowtimes = response.available_showtimes;
      },
      error: (error) => {
        console.error('Error fetching showtimes:', error);
        this.showtimeError = error?.error?.message || 'Could not fetch showtimes';
      }
    });
  }
goToReservation(movieId: number, showtimeId: number): void {
  console.log(`Navigating to reservation for movie ID: ${movieId}, showtime ID: ${showtimeId}`);
  this.router.navigate(['/reservation', movieId, showtimeId]);
}

}
