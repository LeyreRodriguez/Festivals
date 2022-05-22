import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FavouritesComponent } from './component/favourites/favourites.component';

import { AuthService } from './services/auth.service';
import { FirebaseRepositoryService } from './services/FirebaseRepository/firebase-repository.service'

// IMPORTACIONES DE PRUEBA

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    FestivalComponent,
    ErrorComponent,
    FormularioCompraEntradasComponent,
    FooterComponent,
    FormularioConcursoComponent,
    FestivalesComponent,
    SignupUsersComponent,
    SignupCompanyComponent,
    SignupComponent,
    MainPageComponent,
    InscripcionPuestoVentaComponent,
    HeaderComponent,
    ProfileComponent,
    FavouritesComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService, FirebaseRepositoryService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
