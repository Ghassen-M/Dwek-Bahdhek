import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { SigninclientComponent } from './signinclient/signinclient.component';
import { SigninmedecinComponent } from './signinmedecin/signinmedecin.component';
import { SigninpharmacienComponent } from './signinpharmacien/signinpharmacien.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"accueil",component :AccueilComponent},
  {path:"admin",component:AdminPanelComponent},
  {path:"barre",component:BarreRechercheComponent},
  {path:"client",component:ClientComponent},
  {path:"pharamacien",component:PharmacienComponent},
  {path:"medecin",component:MedecinComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"signinclient",component:SigninclientComponent},
  {path:"signinpharmacien",component:SigninpharmacienComponent},
  {path:"signinmedecin",component:SigninmedecinComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
