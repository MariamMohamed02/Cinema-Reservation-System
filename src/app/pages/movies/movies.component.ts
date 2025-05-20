import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  goToMovieDetails(id: number): void {
    this.router.navigate(['/movies', id]);
  }
}
