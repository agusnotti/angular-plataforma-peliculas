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
    name: "Harry Potter y la Piedra Filosofal",
    description: "Harry Potter es un huérfano que vive con sus desagradables tíos, los Dursley, y su repelente primo Dudley. Se acerca su undécimo cumpleaños y tiene pocas esperanzas de recibir algún regalo, ya que nunca nadie se acuerda de él. Sin embargo, pocos días antes de su cumpleaños, una serie de misteriosas cartas dirigidas a él y escritas con una estridente tinta verde rompen la monotonía de su vida: Harry es un mago y sus padres también lo eran.",
    director: "Chris Columbus",
    duration: 220,
    image: "assets/img/hp.jpg",
    like: true
  };

  constructor(private route: ActivatedRoute, private movieService: MovieDataService) {}



  ngOnInit(): void {
    // NO FUNCIONA EL SERVICIO DE LA URL movie/:id DE MOCKAPI
    //O NO TRAE DATOS
    
    /* this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.movieService.getMovie(this.id).subscribe(res => {
        this.movie = res;
      })
      
   }); */
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
