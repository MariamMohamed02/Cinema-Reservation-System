
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movies } from '../interfaces/movies';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = "http://127.0.0.1:8000/api/movies/"; // Replace with real API

  constructor(private http: HttpClient) {}

  getMovies(): Observable<movies[]> {
    return this.http.get<movies[]>(this.apiUrl);
  }

  getMovieById(id: number): Observable<movies> {
    return this.http.get<movies>(`${this.apiUrl}/${id}`);
  }
}
