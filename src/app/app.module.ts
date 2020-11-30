import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { EstrenosMoviesComponent } from './estrenos-movies/estrenos-movies.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesMoviesComponent } from './favorites-movies/favorites-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    EstrenosMoviesComponent,
    HomeComponent,
    MovieComponent,
    ContactComponent,
    FavoritesMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
