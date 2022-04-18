import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'barre', component: BarreRechercheComponent },
    { path: 'client', component: ClientComponent },
    { path: 'medecin', component: MedecinComponent },
    { path: 'pharmacien', component: PharmacienComponent },
    { path: 'admin', component: AdminPanelComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [AboutComponent, ContactComponent, BarreRechercheComponent, ClientComponent, MedecinComponent, PharmacienComponent, AdminPanelComponent]