import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieVM } from 'src/app/core/vm/movies/movie-vm.model';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {
  @Input() movieList$:Observable<MovieVM[]> = new Observable<MovieVM[]>();
  constructor() { }

  ngOnInit(): void {
  }

}
