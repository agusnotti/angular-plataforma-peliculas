import { Component, OnInit } from '@angular/core';
import { Favorite } from './Favorite';

@Component({
  selector: 'app-favorites-movies',
  templateUrl: './favorites-movies.component.html',
  styleUrls: ['./favorites-movies.component.scss']
})
export class FavoritesMoviesComponent implements OnInit {
  favorite: Favorite[] = []

  constructor() { }

  ngOnInit(): void {
  }


}
