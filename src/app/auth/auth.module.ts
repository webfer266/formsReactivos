import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistePagesComponent } from './pages/registe-pages/registe-pages.component';


@NgModule({
  declarations: [
    RegistePagesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
