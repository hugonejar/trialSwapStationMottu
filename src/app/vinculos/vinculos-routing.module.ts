import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinculosComponent } from './vinculos.component';

const routes: Routes = [
  {
    path: '',
    component: VinculosComponent,
    data: {
      title: 'Vinculos',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculosRoutingModule {}
