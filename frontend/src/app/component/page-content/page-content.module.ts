import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [
    MovieCardListComponent,
    MovieCardComponent],
  imports: [
    CommonModule
  ],exports:[MovieCardListComponent,MovieCardComponent]
})
export class PageContentModule { }
