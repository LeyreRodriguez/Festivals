import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormularioCompraEntradasComponent } from './components/formulario-compra-entradas/formulario-compra-entradas.component';
import { FormularioConcursoComponent } from './components/formulario-concurso/formulario-concurso.component';
import { InscripcionPuestoVentaComponent } from './components/inscripcion-puesto-venta/inscripcion-puesto-venta.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupUsersComponent } from './components/signup-users/signup-users.component';
import { SignupBusinessComponent } from './components/signup-business/signup-business.component';
import { ProfileComponent } from './components/profile/profile.component';


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
    FormularioConcursoComponent,
    InscripcionPuestoVentaComponent,
    LoginComponent,
    SignupComponent,
    SignupUsersComponent,
    SignupBusinessComponent,
    ProfileComponent,
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
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
