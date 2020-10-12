import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movie = {
    "name": "Harry Potter",
    "description": "Peli de magia",
    "director": "Chris Columbus",
    "duration": 180,
    "image": "assets/img/hp.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
