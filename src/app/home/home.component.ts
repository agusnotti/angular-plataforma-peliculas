import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-list/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor() { }

  ngOnInit(): void {
    this.movies = new Array<Movie>();
  }

  AddFavorite(movie: Movie){
    if(movie && !this.movies.includes(movie)){
      this.movies.push(movie);
    }
  }

}
