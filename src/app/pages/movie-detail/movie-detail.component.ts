// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-movie-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './movie-detail.component.html',
//   styleUrl: './movie-detail.component.css'
// })
// export class MovieDetailComponent {

// }
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule,  } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports:[RouterModule,CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie: any;

  constructor(private router: Router) {}

  goToReservation(showtime: string) {
    this.router.navigate(['/reserve'], {
      queryParams: {
        movieId: this.movie.id,
        showtime
      }
    });
  }
}

