import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie-list/Movie';

const URL = "https://5fc433dd36bc79001634364c.mockapi.io/api/v1/movies";

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { 
    
  }

  public getAll(): Observable<Movie[]> {
    // fetch('url', {method: 'GET'})
    return this.http.get<Movie[]>(URL);
  }

  public getMovie(id: number): Observable<Movie> {
    const url =`${URL}/${id}`;
    return this.http.get<Movie>(url);
  }

}
