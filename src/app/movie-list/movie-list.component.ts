import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [
    {
      "name": "Harry Potter y la Piedra filosofal",
      "description": "Harry Potter es un huérfano que vive con sus desagradables tíos, los Dursley, y su repelente primo Dudley. Se acerca su undécimo cumpleaños y tiene pocas esperanzas de recibir algún regalo, ya que nunca nadie se acuerda de él. Sin embargo, pocos días antes de su cumpleaños, una serie de misteriosas cartas dirigidas a él y escritas con una estridente tinta verde rompen la monotonía de su vida: Harry es un mago y sus padres también lo eran.",
      "director": "Chris Columbus",
      "duration": 180,
      "image": "assets/img/hp.jpg",
      "enable":true
    },
    {
      "name": "El rey leon",
      "description": "Simba es el hijo del rey de los leones, Mufasa, y heredero de todo el reino. Pero cuando su padre es brutalmente asesinado por su tío Scar, decidirá huir, dejando vía libre para que su tío tome el puesto de su padre como líder de la manada. En su camino, Simba se encuentra con el suricato Timón y el jabalí Pumba, que le enseñarán a vivir la vida sin preocupaciones. Pero el joven león se verá obligado a decidir entre su vida libre de problemas o su destino como rey.",
      "director": "Jon Favreau",
      "duration": 180,
      "image": "assets/img/rl.jpg",
      "enable":false
    },
    {
      "name": "El señor de los anillos",
      "description": "En la Tierra Media, el Señor Oscuro Saurón creó los Grandes Anillos de Poder, forjados por los herreros Elfos. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales. Secretamente, Saurón también forjó un anillo maestro, el Anillo Único, que contiene en sí el poder para esclavizar a toda la Tierra Media. Con la ayuda de un grupo de amigos y de valientes aliados, Frodo emprende un peligroso viaje con la misión de destruir el Anillo Único. Pero el Señor Oscuro Sauron, quien creara el Anillo, envía a sus servidores para perseguir al grupo. Si Sauron lograra recuperar el Anillo, sería el final de la Tierra Media.",
      "director": "Peter Jackson",
      "duration": 180,
      "image": "assets/img/sa.jpg",
      "enable":false
    },
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
