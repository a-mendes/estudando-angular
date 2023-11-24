import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie.model';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-movie-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './movie-read.component.html',
  styleUrl: './movie-read.component.css'
})

export class MovieReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'year', 'actions'];
  movies: Movie[] = [];

  constructor(private apiService: MovieService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  excluirItem(movie: Movie): void {
    if (movie.id !== undefined) {
      this.apiService.deleteMovie(movie.id).subscribe((data) => {
        this.movies = data;
        window.location.reload();
      });
    } else {
      console.error('O ID do filme não está definido.');
    }
  }
}
