import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalesPageRoutingModule } from './festivales-routing.module';

import { FestivalesPage } from './festivales.page';
import { Header2Component } from '../header2/header2.component';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivalesPageRoutingModule
  ],
  declarations: [FestivalesPage, FooterPage]
})
export class FestivalesPageModule {}
