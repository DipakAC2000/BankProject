import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginHomeComponent } from './components/login/home/home.component';
import { paymentHomeComponent } from './components/payment/home/home.component';
import { registerHomeComponent } from './components/register/home/home.component';
import { userHomeComponent } from './components/user/home/home.component';

const routes: Routes = [
  {path: 'login',component:loginHomeComponent},
  {path: 'login/register',component:registerHomeComponent},
  {path:'user', component:userHomeComponent},
   {path:'FundTransfer',component: paymentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
