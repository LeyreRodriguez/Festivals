import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupCompanyPage } from './signup-company.page';

const routes: Routes = [
  {
    path: '',
    component: SignupCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupCompanyPageRoutingModule {}
