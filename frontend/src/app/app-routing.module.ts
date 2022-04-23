import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerRoute } from './layout/header/header.route';
const LAYOUT_ROUTES = [headerRoute]
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  ...LAYOUT_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
