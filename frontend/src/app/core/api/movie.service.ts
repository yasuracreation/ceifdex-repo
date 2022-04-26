import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import {  map, shareReplay, tap } from "rxjs/operators";
import { MovieVM } from '../vm/movies/movie-vm.model';
import { Movies } from './request-models/movies.model';
import { mapPendingMovies } from '../mappers/pending-movie-response-mapper';
import { server } from 'src/app/environment/envirenment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private pendingMovieSubject  = new BehaviorSubject<MovieVM[]>([]);
  pendingMovies$ : Observable<MovieVM[]> = this.pendingMovieSubject.asObservable();

  private complitedMoviesSubject  = new BehaviorSubject<MovieVM[]>([]);
  complitedMovies$ : Observable<MovieVM[]> = this.complitedMoviesSubject.asObservable();
  constructor(private http:HttpClient) {
    this.loadPendingMovies();
    this.loadCompliteMovies();
  }
  loadPendingMovies(){
    const pendingMovies$ =  this.http.get<Movies[]>(`/api/movies/pending`)
    .pipe(
      map((response: Movies[]) => mapPendingMovies(response)),
     tap(courses => this.pendingMovieSubject.next(courses)),

    ).subscribe()

  }
  loadCompliteMovies(){
    const compliteMovies$ = this.http.get<Movies[]>(`/api/movies/complite`)
    .pipe(
      map((response: Movies[]) => mapPendingMovies(response)),
     tap(courses => this.complitedMoviesSubject.next(courses)),
     shareReplay()
    ).subscribe()
  }
}
