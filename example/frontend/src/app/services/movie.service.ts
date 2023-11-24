import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrl = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }

  getMovieById(id: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/${id}`);
  }

  addMovie(Movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}/movies`, Movie);
  }

  updateMovie(id: number, Movie: Movie[]): Observable<Movie[]> {
    return this.http.put<Movie[]>(`${this.apiUrl}/movies/${id}`, Movie);
  }

  deleteMovie(id: number): Observable<Movie[]> {
    return this.http.delete<Movie[]>(`${this.apiUrl}/movies/${id}`);
  }
}