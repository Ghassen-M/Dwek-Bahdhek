import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninclientComponent } from './signinclient/signinclient.component';
import { SigninmedecinComponent } from './signinmedecin/signinmedecin.component';
import { SigninpharmacienComponent } from './signinpharmacien/signinpharmacien.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    MedecinComponent,
    PharmacienComponent,
    PharmacieComponent,
    ContactComponent,
    ProposComponent,
    AdminPanelComponent,
    AboutComponent,
    AccueilComponent,
    BarreRechercheComponent,
    FooterComponent,
    NavbarComponent,
    SigninclientComponent,
    SigninmedecinComponent,
    SigninpharmacienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }