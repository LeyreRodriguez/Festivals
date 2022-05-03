import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormularioCompraEntradasComponent } from './components/formulario-compra-entradas/formulario-compra-entradas.component';
import { FormularioEnviadoComponent } from './components/formulario-enviado/formulario-enviado.component';
import { PagoRealizadoComponent } from './components/pago-realizado/pago-realizado.component';
import { FormularioConcursoComponent } from './components/formulario-concurso/formulario-concurso.component';
import { InscripcionPuestoVentaComponent } from './components/inscripcion-puesto-venta/inscripcion-puesto-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FestivalesComponent,
    FestivalComponent,
    ErrorComponent,
    MainPageComponent,
    FormularioCompraEntradasComponent,
    FormularioEnviadoComponent,
    PagoRealizadoComponent,
    FormularioConcursoComponent,
    InscripcionPuestoVentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,  // required animations module
    ToastrModule.forRoot(),   // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
