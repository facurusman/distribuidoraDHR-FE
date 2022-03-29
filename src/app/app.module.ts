import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ClientsService } from './services/clients.service';
import { ProductsService } from './services/products.service';
import { SalesService } from './services/sales.service';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ErroresComponent } from './components/errores/errores.component';
import { CoreComponent } from './components/core/core.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UsersService } from './services/users.service';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SalesComponent,
    ClientsComponent,
    LoginComponent,
    HomeComponentComponent,
    ErroresComponent,
    CoreComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [RouterModule],
  providers: [ClientsService, UsersService, ProductsService, SalesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
