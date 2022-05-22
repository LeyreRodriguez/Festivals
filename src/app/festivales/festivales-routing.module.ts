import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalesPage } from './festivales.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalesPageRoutingModule {}
