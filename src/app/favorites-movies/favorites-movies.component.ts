import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie-list/Movie';
import { Favorite } from './Favorite';

@Component({
  selector: 'app-favorites-movies',
  templateUrl: './favorites-movies.component.html',
  styleUrls: ['./favorites-movies.component.scss']
})
export class FavoritesMoviesComponent implements OnInit {

  @Input() favorites: Movie[];

  @Output() favoritesChange: EventEmitter<Movie[]> = new EventEmitter<Movie[]>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteFavorite(movie){
    if(movie){
      let index = this.favorites.indexOf(movie, 0);
      if (index > -1) {
          this.favorites.splice(index, 1);
          this.favoritesChange.emit(this.favorites);
      }
    } 
  }


}
