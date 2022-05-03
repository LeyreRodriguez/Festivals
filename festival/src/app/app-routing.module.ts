import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ConcursoComponent } from './components/concurso/concurso.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { VentaComponent } from './components/venta/venta.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { SingupBussinesComponent } from './components/signup-bussines/singup-bussines.component';
import { SingupUsersComponent } from './components/singup-users/singup-users.component';

const rutas: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'festivales', component: FestivalesComponent },
    { path: 'mainPage', component: MainPageComponent },
    { path: 'festival', component: FestivalComponent },
    { path: 'festival/:id', component: FestivalComponent },
    { path: 'concurso', component: ConcursoComponent },
    { path: 'entradas', component: EntradasComponent },
    { path: 'venta', component: VentaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SingupComponent },
    { path: 'signupUsers', component: SingupUsersComponent },
    { path: 'signupBussines', component: SingupBussinesComponent },
    { path: '**', component: ErrorComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
