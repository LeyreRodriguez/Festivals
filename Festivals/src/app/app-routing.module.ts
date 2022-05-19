import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { InscripcionPuestoVentaComponent } from './component/inscripcion-puesto-venta/inscripcion-puesto-venta.component';
import { LoginComponent } from './component/login/login.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { SignupCompanyComponent } from './component/signup-company/signup-company.component';
import { SignupUsersComponent } from './component/signup-users/signup-users.component';
import { SignupComponent } from './component/signup/signup.component';
import { FestivalComponent } from './component/festival/festival.component';
import { FestivalesComponent } from './component/festivales/festivales.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormularioCompraEntradasComponent } from './component/formulario-compra-entradas/formulario-compra-entradas.component';
import { FormularioConcursoComponent } from './component/formulario-concurso/formulario-concurso.component';
import { ErrorComponent } from './component/error/error.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {
    path: 'mainPage',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'signupUsers',
    component: SignupUsersComponent
  },
  {
    path: 'signupCompany',
    component: SignupCompanyComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'mainPage',
    component: MainPageComponent
  },
  {
    path: 'puestoDeVenta',
    component: InscripcionPuestoVentaComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'festival/:id',
    component: FestivalComponent
  },
  {
    path: 'festivales',
    component: FestivalesComponent
  },
  {
    path: 'concurso',
    component: FormularioConcursoComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'entradas',
    component: FormularioCompraEntradasComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
