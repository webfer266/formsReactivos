import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistePagesComponent } from './pages/registe-pages/registe-pages.component';

const routes: Routes = [
  {path:'',
  children:[
    {path: 'sign-up', component:RegistePagesComponent},
    {path: '**', redirectTo:'sing-up'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
