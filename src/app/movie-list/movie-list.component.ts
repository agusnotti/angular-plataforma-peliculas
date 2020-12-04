import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { Movie } from './Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  @Output() movieEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();


  constructor(private movieService: MovieDataService) { 

  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(response=>{
      this.movies = response;
    })
  }

  setLike(movie: Movie){
    movie.like = !movie.like;
  }

  addFavorite(movie: Movie){
    if(movie){
      this.movieEmitter.emit(movie);
    }
  }



}
