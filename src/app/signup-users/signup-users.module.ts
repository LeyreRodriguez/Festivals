import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupUsersPageRoutingModule } from './signup-users-routing.module';

import { SignupUsersPage } from './signup-users.page';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupUsersPageRoutingModule
  ],
  declarations: [SignupUsersPage, FooterPage]
})
export class SignupUsersPageModule {}
