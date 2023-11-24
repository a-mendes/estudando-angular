import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from '../../../views/home/home.component';
import { MovieCrudComponent } from '../../../views/movie-crud/movie-crud.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatListModule, HomeComponent,MovieCrudComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
