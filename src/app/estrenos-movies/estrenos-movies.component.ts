import { Component, OnInit } from '@angular/core';
import { Estreno } from './Estreno';

@Component({
  selector: 'app-estrenos-movies',
  templateUrl: './estrenos-movies.component.html',
  styleUrls: ['./estrenos-movies.component.scss']
})
export class EstrenosMoviesComponent implements OnInit {

  estrenos: Estreno[] = [
    {
      "name": "Brujas",
      "description": "....",
      "image": "../../assets/img/brujas.jpg"
    },
    {
      "name": "Mulán",
      "description": "....",
      "image": "../../assets/img/mulan.jpg"
    },
    {
      "name": "The Croods 2",
      "description": "....",
      "image": "../../assets/img/croods.jpg"
    },
    {
      "name": "La Mujer Maravilla",
      "description": "....",
      "image": "../../assets/img/wWoman.png"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
