import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule, 
    FormsModule],
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css'
})

export class MovieCreateComponent {
  name: string = "";
  year: string = "";

  constructor(private apiService: MovieService) {}

  cadastrarFilme(name: string, year: string): void {

    const newMovie: Movie = {
      name: this.name,
      year: +this.year
    };

    this.apiService.addMovie(newMovie).subscribe((data) => {
      name = "";
      year = "";
      window.location.reload();
    });
  }
}
