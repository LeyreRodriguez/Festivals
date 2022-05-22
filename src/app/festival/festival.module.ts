import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalPageRoutingModule } from './festival-routing.module';

import { FestivalPage } from './festival.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FestivalPageRoutingModule
  ],
  declarations: [FestivalPage, FooterPage]
})
export class FestivalPageModule {}
