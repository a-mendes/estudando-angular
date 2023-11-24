import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieReadComponent } from "../../components/movie/movie-read/movie-read.component";

@Component({
  selector: 'app-movie-crud',
  standalone: true,
  imports: [CommonModule, MovieReadComponent],
  templateUrl: './movie-crud.component.html',
  styleUrl: './movie-crud.component.css'
})
export class MovieCrudComponent {

}
