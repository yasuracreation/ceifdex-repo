import { Component, Input, OnInit } from '@angular/core';
import { MovieVM } from 'src/app/core/vm/movies/movie-vm.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie:MovieVM| undefined;
  faStarIcon = faStar
  constructor() { }

  ngOnInit(): void {
  }

}
