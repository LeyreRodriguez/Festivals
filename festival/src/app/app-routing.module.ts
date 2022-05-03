import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormularioCompraEntradasComponent } from './components/formulario-compra-entradas/formulario-compra-entradas.component';
import { FormularioEnviadoComponent } from './components/formulario-enviado/formulario-enviado.component';
import { PagoRealizadoComponent } from './components/pago-realizado/pago-realizado.component';
import {FormularioConcursoComponent} from './components/formulario-concurso/formulario-concurso.component';


const rutas: Routes = [
  // Ver si esto hace que sea el startPoint
  { path: '', redirectTo: 'formularioConcursso', pathMatch: 'full' },
  { path: 'festivales', component: FestivalesComponent },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'festival', component: FestivalComponent },
  { path: 'festival/:id', component: FestivalComponent },
  { path: 'formularioCompraEntradas', component: FormularioCompraEntradasComponent },
  { path: 'formularioEnviado', component: FormularioEnviadoComponent },
  { path: 'formularioConcursso', component: FormularioConcursoComponent },
  { path: 'pagoRealizado', component: PagoRealizadoComponent },
  { path: 'formularioConcursso', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
