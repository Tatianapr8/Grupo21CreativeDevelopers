import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecoveryPasswordComponent,
    UpdatePasswordComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SecurityModule { }
