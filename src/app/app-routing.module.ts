import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyRegComponent } from './components/company-reg/company-reg.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserRegComponent } from './components/user-reg/user-reg.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'user_reg', component: UserRegComponent},
  {path:'company_reg', component: CompanyRegComponent},
  {path:'home', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
