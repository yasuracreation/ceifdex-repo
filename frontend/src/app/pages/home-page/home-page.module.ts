import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentModule } from '../../component/page-content/page-content.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PageContentModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
