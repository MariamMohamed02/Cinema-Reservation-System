import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
   standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css','../movies/movies.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  selectedMovieId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.selectedMovieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(this.selectedMovieId);
  }

  goToReservation(time: string): void {
    this.router.navigate([`/movies/${this.selectedMovieId}/reserve/${time}`]);
  }
}
