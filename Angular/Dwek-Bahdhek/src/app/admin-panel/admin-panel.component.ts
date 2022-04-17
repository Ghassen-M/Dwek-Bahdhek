import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  comptesAttente: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getcomptesAttente().subscribe((data: any[]) => { this.comptesAttente = data });
  }
  delete(compte: any): void {
    this.api.deleteCompte(compte).subscribe(
      (data: any) => this.comptesAttente = this.comptesAttente.filter(u => u !== compte)
    );
  }
  accept(compte: any): void {
    this.api.acceptCompteAttente(compte.email, compte.mdp).subscribe(
      (data: any) => this.comptesAttente = this.comptesAttente.filter(u => u !== compte)
    );

  }
}
