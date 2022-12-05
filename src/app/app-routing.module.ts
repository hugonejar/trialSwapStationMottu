import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./link-batteries/link-batteries.module').then(
        (m) => m.LinkBatteriesModule
      ),
  },
  {
    path: 'Vinculos',
    loadChildren: () =>
      import('./vinculos/vinculos.module').then((m) => m.VinculosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
