

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { movies } from '../../core/interfaces/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
standalone:true,
imports:[CommonModule,RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: movies[] = [];
  defaultImage = 'https://via.placeholder.com/200x300?text=No+Image';

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
    });
  }

  // goToMovieDetails(id: number): void {
  //   this.router.navigate(['/movie', id]);
  // }
goToMovieDetails(movie: any): void {
  this.router.navigate(['/movie-details'], { state: { movie } });
}






}
