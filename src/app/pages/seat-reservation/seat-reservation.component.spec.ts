import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
})
export class SeatReservationComponent implements OnInit {
  movie: any;
  time: string = '';
  movieId!: number;
  seats: { number: number, available: boolean }[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.time = String(this.route.snapshot.paramMap.get('time'));
    this.movie = this.movieService.getMovieById(this.movieId);

    // Simulated seat data — replace with real API/service call as needed
    this.seats = Array.from({ length: 30 }, (_, i) => ({
      number: i + 1,
      available: Math.random() > 0.2  // randomly mark some seats as unavailable
    }));
  }

  reserveSeat(seatNumber: number): void {
    alert(`Reserved seat ${seatNumber} for "${this.movie.title}" at ${this.time}`);
  }
}
