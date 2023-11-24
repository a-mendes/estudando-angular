import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MovieCrudComponent } from './views/movie-crud/movie-crud.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "movies",
        component: MovieCrudComponent
    },
    {
        path: "movies/create",
        component: MovieCreateComponent
    },
];
