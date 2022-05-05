import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormularioCompraEntradasComponent } from './components/formulario-compra-entradas/formulario-compra-entradas.component';
import {FormularioConcursoComponent} from './components/formulario-concurso/formulario-concurso.component';
import { InscripcionPuestoVentaComponent } from './components/inscripcion-puesto-venta/inscripcion-puesto-venta.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupUsersComponent } from './components/signup-users/signup-users.component';
import { SignupBusinessComponent } from './components/signup-business/signup-business.component';

const rutas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'festivales', component: FestivalesComponent },
    { path: 'mainPage', component: MainPageComponent },
    { path: 'festival', component: FestivalComponent },
    { path: 'festival/:id', component: FestivalComponent },
    { path: 'concurso', component: FormularioConcursoComponent },
    { path: 'entradas', component: FormularioCompraEntradasComponent },
    { path: 'venta', component: InscripcionPuestoVentaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signupUsers', component: SignupUsersComponent },
    { path: 'signupBussines', component: SignupBusinessComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
