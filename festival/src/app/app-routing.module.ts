import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestivalesComponent } from './components/festivales/festivales.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ErrorComponent } from './components/error/error.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const rutas: Routes = [
    { path: 'festivales', component: FestivalesComponent },
    { path: 'mainPage', component: MainPageComponent },
    { path: 'festival', component: FestivalComponent },
    { path: 'festival/:id', component: FestivalComponent },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
