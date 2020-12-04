import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie-list/Movie';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy  {
  id: number;
  private sub: any;

  movie:Movie = {
    id: 0,
    name: "",
    description: "",
    director: "",
    duration: 0,
    image: "",
    subtitles: false,
    like: false
  };

  constructor(private route: ActivatedRoute, private movieService: MovieDataService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.movieService.getMovie(this.id).subscribe(res => {
        this.movie = res;
      })
      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
