import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { EstrenosMoviesComponent } from './estrenos-movies/estrenos-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    EstrenosMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
