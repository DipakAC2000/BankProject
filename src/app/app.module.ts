import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { navbarHomeComponent } from './components/navbar/home/home.component';
import { loginHomeComponent } from './components/login/home/home.component';
import { registerHomeComponent } from './components/register/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { userHomeComponent } from './components/user/home/home.component';
import { paymentHomeComponent } from './components/payment/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    navbarHomeComponent,
    loginHomeComponent,
    registerHomeComponent,
    userHomeComponent,
    paymentHomeComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
