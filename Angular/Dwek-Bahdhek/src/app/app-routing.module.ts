import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'search', component: BarreRechercheComponent },
    { path: 'client', component: BarreRechercheComponent },
    { path: 'medecin', component: BarreRechercheComponent },
    { path: 'pharmacien', component: BarreRechercheComponent },
    { path: 'admin', component: AdminPanelComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
