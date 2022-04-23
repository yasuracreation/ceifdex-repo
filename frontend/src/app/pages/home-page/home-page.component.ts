import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/core/api/movie.service';
import { MovieVM } from 'src/app/core/vm/movies/movie-vm.model';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pendingMovies$:Observable<MovieVM[]> = new Observable<MovieVM[]>()
  complitedMovies: Observable<MovieVM[]> = new Observable<MovieVM[]>();
  constructor(private movieService:MovieService) { }


  ngOnInit(): void {
    this.pendingMovies$ = this.movieService.pendingMovies$;
    this.complitedMovies = this.movieService.complitedMovies$;
  }

}
