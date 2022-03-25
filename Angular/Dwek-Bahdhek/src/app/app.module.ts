import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    MedecinComponent,
    PharmacienComponent,
    PharmacieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
