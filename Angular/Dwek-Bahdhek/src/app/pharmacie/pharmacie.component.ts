import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.scss']
})
export class PharmacieComponent implements OnInit {
  type_pharmacie = ["Jour", "Nuit"];
  ancienAdr="";
  dataRepresentation: any[] = [];

  modifForm = new FormGroup({
    nom_pharmacie: new FormControl('', [Validators.required]),
    adr_pharmacie: new FormControl('', [Validators.required]),
    type_pharmacie: new FormControl('', [Validators.required]),
    email_pharmacie: new FormControl('', [Validators.required, Validators.email]),
    tel_pharmacie: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
  });

  get f() { return this.modifForm.controls; }
  get valid() { return this.modifForm.valid; }
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getPharmacie().subscribe(
      (data) => {
        this.dataRepresentation = [
          ["Nom pharmacie", data.nom_pharmacie],
          ["Adresse pharmacie", data.adr_pharmacie],
          ["Type Pharmacie", data.type_pharmacie],
          ["Email pharmacie", data.email_pharmacie],
          ["Téléphone pharmacie", data.tel_pharmacie]
        ];
        this.modifForm.patchValue(data);
      });
  }
  isModif = false;
  onModif(): void {
    this.isModif = true;
    this.api.getPharmacie().subscribe(
      (data) => {
        this.modifForm.patchValue(data);
      });
      this.ancienAdr=this.modifForm.value.adr_pharmacie;

  }

  onSubmit(): void {
    this.isModif = !this.isModif;
    this.api.majPharmacie(this.ancienAdr, this.modifForm.value).subscribe((data) => {
      this.dataRepresentation = [
        ["Nom pharmacie", this.modifForm.value.nom_pharmacie],
        ["Adresse pharmacie", this.modifForm.value.adr_pharmacie],
        ["Type Pharmacie", this.modifForm.value.type_pharmacie],
        ["Email pharmacie", this.modifForm.value.email_pharmacie],
        ["Téléphone pharmacie", this.modifForm.value.tel_pharmacie]
      ];
    });

  }
  onSuppr(): void {
    this.api.deletePharmacie(this.modifForm.value.adr_pharmacie).subscribe(
      (data) => {
        this.dataRepresentation = [
          ["Nom pharmacie", this.modifForm.value.nom_pharmacie],
          ["Adresse pharmacie", this.modifForm.value.adr_pharmacie],
          ["Type Pharmacie", this.modifForm.value.type_pharmacie],
          ["Email pharmacie", this.modifForm.value.email_pharmacie],
          ["Téléphone pharmacie", this.modifForm.value.tel_pharmacie]
        ];
        this.modifForm.patchValue(data);

      }

    );
    this.isModif=false;
  }

}
