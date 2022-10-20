import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((x) => x.HomeComponent),
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./site/site.routes').then(m => m.SiteRoutes),
  // },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
