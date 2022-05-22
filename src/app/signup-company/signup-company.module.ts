import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SignupCompanyPageRoutingModule } from './signup-company-routing.module';

import { SignupCompanyPage } from './signup-company.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupCompanyPageRoutingModule
  ],
  declarations: [SignupCompanyPage, FooterPage]
})
export class SignupCompanyPageModule {}
