import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ConcursoComponent } from './components/concurso/concurso.component';
import { VentaComponent } from './components/venta/venta.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { SingupBussinesComponent } from './components/signup-bussines/singup-bussines.component';
import { SingupUsersComponent } from './components/singup-users/singup-users.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FestivalesComponent,
    FestivalComponent,
    ErrorComponent,
    MainPageComponent,
    PruebaComponent,
    ConcursoComponent,
    VentaComponent,
    EntradasComponent,
    LoginComponent,
    SingupComponent,
    SingupBussinesComponent,
    SingupUsersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
