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
  sexe = ["homme", "femme"];

  dataRepresentation: any[] = [];

  modifForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    dateN: new FormControl('', [Validators.required]),
    sexe: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    adr: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required])
  });

  get f() { return this.modifForm.controls; }
  get valid() { return this.modifForm.valid; }
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getCompte().subscribe(
      (data) => {

        this.dataRepresentation = [
          ["Nom pharmacie", data.username],
          ["Adresse pharmacie", data.dateN],
          ["Type Pharmacie", data.sexe],
          ["Email pharmacie", data.email],
          ["Téléphone pharmacie", data.tel]
        ];
        this.modifForm.patchValue(data);

      });
  }
  isModif = false;
  onModif(): void {
    this.isModif = true;
    this.api.getCompte().subscribe(
      (data) => {
        this.modifForm.patchValue(data);
      });
  }

  onSubmit(): void {
    this.isModif = !this.isModif;

    this.api.majCompte(this.modifForm.value).subscribe((data) => {
      this.dataRepresentation = [
        ["Nom pharmacie", this.modifForm.value.username],
        ["Adresse pharmacie", this.modifForm.value.dateN],
        ["Type Pharmacie", this.modifForm.value.sexe],
        ["Email pharmacie", this.modifForm.value.email],
        ["Téléphone pharmacie", this.modifForm.value.tel]
      ];
    });

  }
  onSuppr(): void {
    this.api.deletePharmacie(this.modifForm.value.email).subscribe();
  }

}
